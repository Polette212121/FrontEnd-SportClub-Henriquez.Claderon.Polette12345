/* ========================================================
   DASHBOARD ADMIN - LÓGICA CRUD COMPLETA Y SINCRONIZADA
   ======================================================== */
const API_URL = 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', async function() {
    // 1. Verificación de seguridad
    const isAuthorized = await protectRoute('admin');
    if (!isAuthorized) return;
    
    // 2. Cargar datos iniciales desde la BD
    loadUsers(); 
    setupLogout();

    // 3. EVENTO PARA EL FORMULARIO (GUARDAR)
    const form = document.getElementById('userForm');
    if (form) {
        form.addEventListener('submit', handleUserSubmit);
    }

    // 4. EVENTO PARA MOSTRAR FORMULARIO (BOTÓN "CREAR NUEVO USUARIO")
    const btnCrear = document.getElementById('crearUsuario');
    if (btnCrear) {
        btnCrear.addEventListener('click', function(e) {
            e.preventDefault();
            const container = document.getElementById('userFormContainer');
            const formElement = document.getElementById('userForm');
            
            formElement.reset();
            document.getElementById('userId').value = ''; 
            document.getElementById('formTitle').textContent = 'Crear Nuevo Usuario';
            container.style.display = 'block';
        });
    }
});

// --- PROTECCIÓN DE RUTAS ---
async function protectRoute(requiredRole) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (!token || !user || user.role !== requiredRole) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

// --- CRUD: LEER (CONECTADO A BD Y ORDENADO) ---
async function loadUsers() {
    const token = localStorage.getItem('token');
    const tbody = document.getElementById('usuariosTabla');
    
    try {
        console.log("Intentando conectar con:", `${API_URL}/users`);
        const response = await fetch(`${API_URL}/users`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        
        const usersRaw = await response.json();
        console.log("Datos recibidos:", usersRaw); // <-- MIRA LA CONSOLA (F12)

        if (!response.ok) {
            console.error("Error en la respuesta del servidor:", response.status);
            return;
        }

        const users = (Array.isArray(usersRaw) ? usersRaw : []).sort((a, b) => 
            (a.full_name || '').localeCompare(b.full_name || '')
        );
        
        if (tbody) {
            tbody.innerHTML = users.map(user => `
                <tr>
                    <td>#${user.id}</td>
                    <td>${user.full_name}</td>
                    <td>${user.email}</td>
                    <td><span class="badge ${getRoleBadge(user.role)}">${user.role}</span></td>
                    <td>${formatDate(user.created_at || user.createdAt)}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="prepareEdit('${user.id}', '${user.full_name}', '${user.email}', '${user.role}', '${user.edad || ''}', '${user.peso || ''}')">✏️</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteUser('${user.id}')">🗑️</button>
                    </td>
                </tr>
            `).join('');
        }

        // Actualización forzada de contadores
        document.getElementById('totalUsuarios').textContent = users.length;
        document.getElementById('totalCoaches').textContent = users.filter(u => u.role === 'coach').length;
        
        if (users.length === 0) {
            console.warn("La API respondió correctamente pero la lista de usuarios está vacía.");
        }

    } catch (err) {
        console.error("Error de conexión:", err);
        alert("No se pudo conectar a la base de datos. Asegúrate de que el servidor esté encendido.");
    }
}

// --- CRUD: GUARDAR (CREAR O ACTUALIZAR) ---
async function handleUserSubmit(e) {
    e.preventDefault();
    document.querySelectorAll('.error-msg').forEach(el => el.remove());
    
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password && password !== confirmPassword) {
        mostrarError('confirmPassword', 'Las contraseñas no coinciden');
        return;
    }

    const payload = {
        full_name: document.getElementById('nombre').value,
        email: document.getElementById('email').value,
        role: document.getElementById('role').value,
        password: password,
        edad: document.getElementById('edad').value,
        peso: document.getElementById('peso').value
    };

    try {
        const response = await fetch(userId ? `${API_URL}/users/${userId}` : `${API_URL}/users`, {
            method: userId ? 'PUT' : 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}` 
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            document.getElementById('userFormContainer').style.display = 'none';
            document.getElementById('userForm').reset();
            const msg = document.getElementById('mensajeExito');
            if(msg) {
                msg.style.display = 'block';
                setTimeout(() => { msg.style.display = 'none'; }, 3000);
            }
            await loadUsers();
        } else {
            const data = await response.json();
            mostrarError('formTitle', data.message || 'Error al guardar');
        }
    } catch (err) {
        mostrarError('formTitle', 'Error de conexión con el servidor');
    }
}

// --- PREPARAR EDICIÓN ---
window.prepareEdit = function(id, name, email, role, edad, peso) {
    document.getElementById('userId').value = id;
    document.getElementById('nombre').value = name;
    document.getElementById('email').value = email;
    document.getElementById('role').value = role;
    document.getElementById('edad').value = (edad === 'undefined') ? '' : edad;
    document.getElementById('peso').value = (peso === 'undefined') ? '' : peso;
    document.getElementById('formTitle').textContent = 'Editar Usuario';
    document.getElementById('userFormContainer').style.display = 'block';
};

// --- ELIMINAR ---
window.deleteUser = async function(id) {
    if (!confirm('¿Eliminar este usuario?')) return;
    await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    });
    await loadUsers();
};

// --- UTILIDADES ---
function mostrarError(elementId, mensaje) {
    const el = document.getElementById(elementId);
    const error = document.createElement('div');
    error.className = 'error-msg';
    error.style.color = 'red';
    error.textContent = mensaje;
    el.parentNode.appendChild(error);
}

function getRoleBadge(role) {
    const badges = { 'admin': 'bg-danger', 'coach': 'bg-primary', 'user': 'bg-success' };
    return badges[role] || 'bg-secondary';
}

function formatDate(dateString) {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('es-CL');
}

function setupLogout() {
    document.querySelector('.btn-logout')?.addEventListener('click', () => {
        localStorage.clear();
        window.location.href = '../index.html';
    });
}