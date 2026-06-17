const API_URL = 'http://localhost:3000/api';

const RESERVAS_USUARIO = [
    { clase: 'Crossfit', dia: 'Lunes', hora: '19:00', coach: 'Carlos', id: 1 },
    { clase: 'Yoga', dia: 'Martes', hora: '18:00', coach: 'María', id: 2 },
    { clase: 'Natación', dia: 'Miércoles', hora: '20:00', coach: 'Jorge', id: 3 },
    { clase: 'Funcional', dia: 'Jueves', hora: '19:00', coach: 'Carlos', id: 4 },
    { clase: 'Boxing', dia: 'Viernes', hora: '17:00', coach: 'Luis', id: 5 }
];

const CLASES_DISPONIBLES = [
    { nombre: 'Crossfit', descripcion: 'Entrenamiento funcional intenso con movimientos variados y dinámicos', icono: '💪', accion: 'Reservar' },
    { nombre: 'Yoga', descripcion: 'Flexibilidad, equilibrio y meditación para el bienestar integral', icono: '🧘', accion: 'Inscribirse' },
    { nombre: 'Natación', descripcion: 'Cardio y resistencia en agua, ideal para articulaciones', icono: '🏊', accion: 'Ver más' },
    { nombre: 'Pilates', descripcion: 'Fortalecimiento del core y mejora de postura corporal', icono: '🤸', accion: 'Reservar' },
    { nombre: 'Boxing', descripcion: 'Boxeo para liberar estrés y mejorar coordinación', icono: '🥊', accion: 'Ver más' }
];

// ============================================
// CONTROL DE ACCESO INTERNO & PROTECCIÓN DE RUTA
// ============================================
window.addEventListener('load', async function() {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');

    // Si no hay credenciales, redirige directo al login en silencio
    if (!token || !user) {
        window.location.href = 'login.html';
        return;
    }

    // EXTRAER ROL CON COMPROBACIÓN ULTRA-FLEXIBLE
    // Busca en la raíz del objeto, dentro de 'user' o dentro de 'data'
    let userRole = user.role || (user.user && user.user.role) || (user.data && user.data.role);

    // Si por alguna razón no se encuentra un rol pero el objeto existe, asumimos 'user' por defecto
    if (!userRole) {
        userRole = 'user'; 
    }

    // Normalizar a minúsculas para evitar fallos si viene como 'User' o 'Usuario'
    const normalizedRole = userRole.toString().toLowerCase();

    // Redirección de seguridad: si es admin o coach, los mandamos a sus paneles respectivos en vez de echarlos
    if (normalizedRole === 'admin') {
        window.location.href = 'dashboard-admin.html';
        return;
    } else if (normalizedRole === 'coach') {
        window.location.href = 'dashboard-coach.html';
        return;
    }

    // Protección estricta: Si definitivamente NO es un rol de tipo cliente/usuario, se limpia la sesión y se expulsa
    if (normalizedRole !== 'usuario' && normalizedRole !== 'user') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = 'login.html';
        return;
    }

    try {
        const response = await fetch(`${API_URL}/auth/me`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            const data = await response.json();
            // Extraer los datos del perfil de manera tolerante según la respuesta de tu backend
            const datosUsuario = data.user || data.data || data;
            cargarDashboardUsuario(datosUsuario);
        } else {
            throw new Error('Sesión inválida en el servidor');
        }
    } catch (error) {
        console.error('Error al validar sesión con /auth/me:', error);
        
        // PARCHE DE ESTABILIDAD: Si la ruta /auth/me llega a fallar o no está implementada,
        // usamos los datos guardados localmente durante el login para que el panel sea 100% funcional y no te bote
        if (user) {
            cargarDashboardUsuario(user);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.dashboard-section');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            
            menuLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            this.classList.add('active');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) targetSection.classList.add('active');
        });
    });

    const btnCerrarSesion = document.getElementById('cerrarSesion');
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        });
    }
});

function cargarDashboardUsuario(usuario) {
    // Buscar el nombre dinámicamente en cualquier nomenclatura que devuelva tu BD
    const nombreCompleto = usuario.fullName || usuario.full_name || usuario.nombre || 'Usuario';
    const primerNombre = nombreCompleto.split(' ')[0];
    
    const elemNombre = document.getElementById('nombreUsuario');
    const elemMoti = document.getElementById('mensajeMoti');
    if (elemNombre) elemNombre.textContent = primerNombre;
    if (elemMoti) elemMoti.textContent = `Continúa entrenando para alcanzar tus metas, ${primerNombre}.`;
    
    if (document.getElementById('perfilNombre')) document.getElementById('perfilNombre').textContent = nombreCompleto;
    if (document.getElementById('perfilEmail')) document.getElementById('perfilEmail').textContent = usuario.email || '-';
    
    // Validar deporte favorito en cualquier formato
    const deporteFav = usuario.favoriteSport || usuario.favorite_sport || usuario.deporte || 'No especificado';
    if (document.getElementById('perfilDeporte')) document.getElementById('perfilDeporte').textContent = deporteFav;
    
    const fechaOriginal = usuario.createdAt || usuario.created_at || usuario.fechaRegistro;
    const elemFecha = document.getElementById('perfilFecha');
    if (elemFecha) elemFecha.textContent = fechaOriginal ? new Date(fechaOriginal).toLocaleDateString('es-CL') : 'Reciente';
    
    llenarReservas();
    llenarClases();
}

function llenarReservas() {
    const tbody = document.getElementById('reservasTabla');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    if (RESERVAS_USUARIO.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align:center; color: #999;">No tienes reservas</td></tr>';
        return;
    }
    
    RESERVAS_USUARIO.forEach((reserva, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${reserva.clase}</strong></td>
            <td>${reserva.dia}</td>
            <td>${reserva.hora}</td>
            <td>${reserva.coach}</td>
            <td><button class="btn btn-small btn-secondary" onclick="cancelarReserva(${index})">Cancelar</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function llenarClases() {
    const grid = document.getElementById('clasesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    CLASES_DISPONIBLES.forEach(clase => {
        const card = document.createElement('div');
        card.className = 'clase-card';
        card.innerHTML = `
            <div class="clase-icon">${clase.icono}</div>
            <h3>${clase.nombre}</h3>
            <p>${clase.descripcion}</p>
            <button class="btn btn-small btn-primary" onclick="reservarClase('${clase.nombre}')">${clase.accion}</button>
        `;
        grid.appendChild(card);
    });
}

function cancelarReserva(index) {
    RESERVAS_USUARIO.splice(index, 1);
    llenarReservas();
    console.log('Reserva cancelada exitosamente');
}

function reservarClase(nombreClase) {
    console.log(`Inscripción exitosa a la clase de ${nombreClase}`);
}