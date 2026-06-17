# 📚 Documentación Técnica - SportClub

## 🔧 Arquitectura del Sistema

### **Capas del Proyecto**

```
┌─────────────────────────────────────┐
│      PRESENTACIÓN (HTML/CSS)        │
│  - Landing Page                     │
│  - Formularios (Login, Registro)    │
│  - Dashboards (3 roles)             │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│      LÓGICA (JavaScript)            │
│  - Autenticación (auth.js)          │
│  - Validación (forms.js)            │
│  - Dashboards (3 archivos)          │
└─────────────────────────────────────┘
           ↓
┌─────────────────────────────────────┐
│      DATOS (LocalStorage)           │
│  - Usuarios                         │
│  - Sesiones                         │
│  - Datos de prueba                  │
└─────────────────────────────────────┘
```

---

## 🔐 Sistema de Autenticación

### **auth.js - Funciones Principales**

#### **1. inicializarSistema()**
```javascript
funcion: inicializarSistema()
Descripción: Inicializa el sistema con 3 usuarios por defecto
Trigger: Se ejecuta al cargar cualquier página
Acción: Si no existen usuarios, los crea en LocalStorage
```

#### **2. registrarUsuario()**
```javascript
funcion: registrarUsuario(nombre, email, password, deporte)
Pausa: (nombre, email, password, deporte)
Retorna: {exito: boolean, mensaje: string}
Validaciones:
  - Email único
  - Contraseña mínimo 6 caracteres
  - Nombre mínimo 3 caracteres
Acción: Crea nuevo usuario con rol 'usuario'
```

#### **3. validarLogin()**
```javascript
funcion: validarLogin(email, password)
Parámetros: (email, password)
Retorna: boolean
Acción: Busca usuario, guarda en sessionStorage si es correcto
```

#### **4. obtenerUsuarioActual()**
```javascript
funcion: obtenerUsuarioActual()
Retorna: usuario object | null
Acción: Obtiene usuario de sessionStorage
```

#### **5. verificarSesion()**
```javascript
funcion: verificarSesion()
Retorna: usuario object | null
Acción: Verifica sesión, redirige a login si no existe
Seguridad: Protege dashboards
```

#### **6. cerrarSesion()**
```javascript
funcion: cerrarSesion()
Acción: Limpia sessionStorage y redirige a login
```

#### **7. actualizarPerfil()**
```javascript
funcion: actualizarPerfil(email, datosNuevos)
Parámetros: (email, datosNuevos object)
Retorna: {exito: boolean, mensaje: string}
Acción: Actualiza datos usuario en LocalStorage y sessionStorage
```

---

## 📊 Dashboard Usuario

### **dashboard-usuario.js - Estructura**

#### **Datos Globales**
```javascript
RESERVAS_USUARIO (Array)
  - 5 reservas mínimas
  - Propiedades: clase, dia, hora, coach, id

CLASES_DISPONIBLES (Array)
  - 5+ clases disponibles
  - Propiedades: nombre, descripcion, icono, accion
```

#### **Funciones Principales**

```javascript
cargarDashboardUsuario(usuario)
├─ Valida sesión
├─ Llena bienvenida
├─ Llena perfil rápido
├─ Carga reservas
└─ Carga clases disponibles

llenarReservas()
├─ Limpia tabla
├─ Itera RESERVAS_USUARIO
├─ Crea filas dinámicamente
└─ Agrega evento onClick para cancelar

llenarClases()
├─ Limpia grid
├─ Itera CLASES_DISPONIBLES
├─ Crea cards dinámicamente
└─ Agrega evento onClick para reservar

cancelarReserva(index)
├─ Pide confirmación
├─ Elimina reserva del array
├─ Recarga tabla
└─ Muestra mensaje exitoso

reservarClase(nombreClase)
└─ Muestra alerta de éxito
```

#### **Protección de Acceso**
```javascript
window.addEventListener('load', function() {
  const usuario = verificarSesion();
  if (usuario && usuario.rol === 'usuario') {
    cargarDashboardUsuario(usuario);
  } else if (!usuario) {
    window.location.href = '../pages/login.html';
  } else {
    alert('No tienes acceso');
  }
});
```

---

## 👥 Dashboard Coach

### **dashboard-coach.js - Estructura**

#### **Datos Globales**
```javascript
ALUMNOS_COACH (Array - 5 mínimo)
  - Propiedades: nombre, correo, clase, estado

CLASES_COACH (Array - 3 mínimo)
  - Propiedades: nombre, dia, hora, alumnos

HORARIOS_SEMANALES (Array - 5 mínimo)
  - Propiedades: nombre, dia, hora, alumnos
```

#### **Funciones Principales**

```javascript
cargarDashboardCoach(usuario)
├─ Calcula estadísticas
├─ Llena panel resumen
├─ Carga tabla alumnos
├─ Carga cards clases
└─ Carga tabla horarios

llenarAlumnos()
├─ Itera ALUMNOS_COACH
├─ Asigna estados (activo/inactivo)
├─ Crea badges por estado
└─ Genera filas dinámicamente

llenarClasesCoach()
├─ Obtiene clases únicas
├─ Genera card por clase
├─ Muestra cantidad alumnos
└─ Agrega botón "Ver Detalles"

llenarHorarios()
├─ Itera HORARIOS_SEMANALES
├─ Crea badges con cantidad
└─ Genera filas con información

verDetalles(nombreClase)
└─ Muestra alerta con nombre
```

#### **Estadísticas Mostradas**
```javascript
Total Alumnos: ALUMNOS_COACH.length
Clases Activas: CLASES_COACH.length
Horas Semanales: Valor fijo "6h"
```

---

## ⚙️ Dashboard Admin

### **dashboard-admin.js - Estructura**

#### **Datos Globales**
```javascript
CLASES_SISTEMA (Array - 5 clases)
  - Propiedades: nombre, capacidad, inscritos
```

#### **Funciones Principales**

```javascript
cargarDashboardAdmin(usuario)
├─ Obtiene usuarios con RUT
├─ Calcula 3 estadísticas
├─ Carga tabla usuarios
├─ Carga reportes
└─ Carga cards clases

obtenerTodosUsuariosAdmin()
├─ Obtiene todos los usuarios
├─ Agrega RUT generado (20000000+index-K)
└─ Retorna array completo

llenarUsuariosAdmin(usuarios)
├─ Itera usuarios
├─ Genera RUT dinámico
├─ Asigna badges por rol
├─ Asigna estado (activo/inactivo)
└─ Crea filas interactivas

llenarReportes()
├─ Clases más solicitadas (ordenadas por inscritos)
├─ Usuarios activos (aleatorio 10-30)
└─ Reservas hoy (aleatorio 15-45)

llenarClasesAdmin()
├─ Itera CLASES_SISTEMA
├─ Calcula porcentaje ocupación
├─ Genera barra de progreso
└─ Crea card por clase
```

#### **Eventos de Configuración**
```javascript
Botón "Crear Usuario" → Alerta (próximamente)
Botón "Editar Sistema" → Alerta (próximamente)
Botón "Configuración" → Alerta (próximamente)
```

---

## 🎨 Sistema de Estilos (dashboard.css)

### **Variables CSS Principales**
```css
--primary-dark: #2c3e50          /* Color fondo oscuro */
--user-blue: #3498db              /* Color Usuario */
--coach-green: #27ae60            /* Color Coach */
--admin-red: #e74c3c              /* Color Admin */
--primary-gold: #f39c12           /* Color destaque */
--text-dark: #2c3e50              /* Texto oscuro */
--text-light: #7f8c8d             /* Texto claro */
--border-color: #ecf0f1           /* Color bordes */
--bg-light: #f5f5f5               /* Fondo claro */
```

### **Componentes Principales**

#### **Header**
```css
.dashboard-header
  - Sticky (position: sticky; top: 0)
  - Gradient background
  - Color de borde según rol
  - Botones con hover effect
```

#### **Navegación Lateral**
```css
.dashboard-nav
  - Ancho: 220px
  - Sticky (position: sticky; top: 120px)
  - Links con animación de traslación
  - Borde izquierdo colorido
```

#### **Tarjetas de Estadísticas**
```css
.stat-card
  - Gradient background
  - Borde superior dorado
  - Hover: traslación Y (-8px)
  - Número grande y colorido
```

#### **Tablas**
```css
.dashboard-table
  - Header con gradient
  - Borde inferior dorado
  - Filas con hover effect
  - Responsive con scroll
```

#### **Cards de Clases**
```css
.clase-card
  - Border: 2px solid
  - Hover: traslación Y (-10px) + shadow
  - Centro: icono 3rem
```

#### **Badges y Estados**
```css
.estado-badge.activo    → Verde claro
.estado-badge.inactivo  → Rojo claro
.rol-badge.usuario      → Azul claro
.rol-badge.coach        → Verde claro
.rol-badge.admin        → Rojo claro
```

### **Responsive Design**
```css
Desktop:        1024px+  → Diseño completo
Tablet:         768-1024 → Navegación horizontal
Móvil:          <768px   → Flexible layout

Breakpoints:
@media (max-width: 1024px)
  - dashboard-nav: 180px
  - stats-grid: minmax(150px, 1fr)

@media (max-width: 768px)
  - dashboard-container: flex-direction: column
  - dashboard-nav: flex horizontal
  - stats-grid: 1fr (una columna)
```

---

## 🔄 Flujo de Datos

### **Flujo de Login**
```
1. Usuario ingresa email y password en login.html
2. JavaScript valida con validarLogin()
3. Si es correcto:
   - Guarda usuario en sessionStorage
   - Determina rol del usuario
   - Redirige a dashboard correspondiente
4. Si es incorrecto:
   - Muestra error
   - Mantiene en login
```

### **Flujo de Registro**
```
1. Usuario llena formulario en registro.html
2. JavaScript valida con registrarUsuario()
3. Si es válido:
   - Crea nuevo usuario
   - Guarda en LocalStorage
   - Redirige a login
4. Si hay error:
   - Muestra mensaje
   - Mantiene en registro
```

### **Flujo de Sesión en Dashboard**
```
1. Dashboard se carga
2. Llama a verificarSesion()
3. Si sesión existe:
   - Valida rol
   - Carga dashboard correcto
4. Si no existe:
   - Redirige a login
5. Si rol incorrecto:
   - Muestra error
   - Redirige a inicio
```

---

## 📦 Estructura de Datos

### **Objeto Usuario**
```javascript
{
  id: 1,                          // Timestamp o número único
  nombre: "Javier García",        // Nombre completo
  email: "javier@example.com",    // Email único
  password: "password123",        // Contraseña (texto plano)
  rol: "usuario",                 // "usuario" | "coach" | "admin"
  deporte: "crossfit",            // Deporte favorito
  edad: 28,                       // Edad
  fechaRegistro: "01/01/2026",    // dd/mm/yyyy
  activo: true                    // Estado activo
}
```

### **Objeto Reserva**
```javascript
{
  clase: "Crossfit",              // Nombre de la clase
  dia: "Lunes",                   // Día de la semana
  hora: "19:00",                  // Hora HH:MM
  coach: "Carlos",                // Nombre del coach
  id: 1                           // ID único
}
```

### **Objeto Clase**
```javascript
{
  nombre: "Crossfit",             // Nombre
  descripcion: "...",             // Descripción
  icono: "💪",                    // Emoji o icono
  accion: "Reservar"              // Texto del botón
}
```

---

## 🔒 Seguridad

### **Validaciones Implementadas**
- ✅ Email único en registro
- ✅ Contraseña mínimo 6 caracteres
- ✅ Nombre mínimo 3 caracteres
- ✅ Verificación de sesión en dashboards
- ✅ Protección por rol de usuario

### **Limitaciones (Desarrollo)**
- ⚠️ Contraseñas en texto plano (solo desarrollo)
- ⚠️ Sin encriptación de datos
- ⚠️ LocalStorage no es seguro para producción
- ⚠️ Sin validación backend

### **Recomendaciones para Producción**
- Usar HTTPS
- Encriptar contraseñas con bcrypt
- Implementar backend (Node.js, Python, etc.)
- Base de datos (MongoDB, PostgreSQL, etc.)
- Tokens JWT para autenticación
- CORS configurado

---

## 🐛 Debugging

### **Herramientas de Consola**
```javascript
// Ver usuarios actuales
console.log(obtenerTodosUsuarios());

// Ver usuario actual
console.log(obtenerUsuarioActual());

// Limpiar LocalStorage
localStorage.clear();

// Ver sessionStorage
console.log(sessionStorage);
```

### **Errores Comunes**

| Error | Causa | Solución |
|-------|-------|----------|
| "No tienes acceso" | Rol incorrecto | Inicia con usuario correcto |
| Redirige a login | Sesión expirada | Inicia sesión nuevamente |
| Datos no aparecen | LocalStorage vacío | Recarga la página |
| Formulario no valida | Campos incompletos | Completa todos los campos |

---

## 📈 Estadísticas del Proyecto

| Métrica | Cantidad |
|---------|----------|
| Archivos HTML | 6 |
| Archivos CSS | 4 |
| Archivos JS | 5 |
| Líneas de CSS | 550+ |
| Líneas de JS | 400+ |
| Funciones principales | 25+ |
| Usuarios de prueba | 3 |
| Datos de prueba | 50+ registros |

---

## 🎓 Conceptos Enseñados

- ✅ DOM manipulation con JavaScript
- ✅ Event listeners y handlers
- ✅ LocalStorage y SessionStorage
- ✅ Validación de formularios
- ✅ Diseño responsivo con CSS
- ✅ CSS Grid y Flexbox
- ✅ Protección de rutas
- ✅ Gestión de roles y permisos
- ✅ Estructura de datos en JavaScript
- ✅ Programación orientada a objetos

---

## 🚀 Posibles Mejoras Futuras

1. **Backend**
   - Implementar servidor Node.js/Express
   - Base de datos MongoDB
   - API RESTful

2. **Seguridad**
   - Encriptación de contraseñas
   - Tokens JWT
   - HTTPS

3. **Funcionalidades**
   - Carrito de compra
   - Sistema de pagos
   - Notificaciones por email
   - Chat en vivo

4. **UI/UX**
   - Tema oscuro
   - Animaciones más fluidas
   - Gráficos interactivos
   - Calendario visual

5. **Performance**
   - Minificación de CSS/JS
   - Lazy loading de imágenes
   - Cache de datos
   - Service Workers

---

## 📞 Soporte

Para preguntas técnicas o reportar bugs, contacta al autor:

**Autor:** Polette2121  
**Email:** pole.hencal@gmail.com  
**GitHub:** https://github.com/Polette2121

---

**Última actualización:** Junio 2026
