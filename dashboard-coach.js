/* ============================================
   DASHBOARD COACH - LOGIC DE CONTROL
   ============================================ */

const API_URL = 'http://localhost:3000/api';

document.addEventListener('DOMContentLoaded', async function() {
    // Validación estricta de rol
    const isAuthorized = await protectRoute('coach');
    if (!isAuthorized) return;
    
    loadSessionInfo();
    setupMenuNavigation();
    setupLogout();
});

async function protectRoute(requiredRole) {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    
    if (!token || !user) {
        window.location.href = 'login.html';
        return false;
    }
    
    const userRole = user.role || (user.user && user.user.role);
    
    if (userRole !== requiredRole) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = 'login.html';
        return false;
    }
    
    return true;
}

function loadSessionInfo() {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    const userDisplay = document.getElementById('userDisplay');
    if (userDisplay && user) {
        const name = user.fullName || user.nombre || 'Coach';
        const email = user.email || '';
        userDisplay.textContent = `👤 ${name} (${email})`;
    }
}

function setupMenuNavigation() {
    const menuLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('.dashboard-section');
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            menuLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            this.classList.add('active');
            const section = document.getElementById(sectionId);
            if (section) section.classList.add('active');
        });
    });
}

function setupLogout() {
    const btnCerrarSesion = document.getElementById('cerrarSesion');
    if (btnCerrarSesion) {
        btnCerrarSesion.addEventListener('click', function(e) {
            e.preventDefault();
            localStorage.clear();
            window.location.href = 'login.html';
        });
    }
}