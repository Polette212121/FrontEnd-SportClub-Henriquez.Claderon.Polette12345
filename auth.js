// Authentication utilities

function getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
}

function isLoggedIn() {
    return !!localStorage.getItem('token');
}

function getRoleBadgeClass(role) {
    const roleClasses = {
        'admin': 'bg-danger',
        'coach': 'bg-primary',
        'user': 'bg-success'
    };
    return roleClasses[role] || 'bg-secondary';
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function showMessage(container, message, type = 'error') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `alert alert-${type} show`;
    messageDiv.textContent = message;
    container.appendChild(messageDiv);
    setTimeout(() => messageDiv.remove(), 5000);
}

function clearMessages(container) {
    const messages = container.querySelectorAll('.alert');
    messages.forEach(msg => msg.remove());
}

function redirectIfNotLoggedIn() {
    if (!isLoggedIn()) {
        window.location.href = 'pages/login.html';
    }
}

function redirectIfNotAdmin() {
    const user = getCurrentUser();
    if (!user || user.role !== 'admin') {
        window.location.href = '../index.html';
    }
}

function checkAuth() {
    if (!isLoggedIn()) {
        window.location.href = '../pages/login.html';
        return false;
    }
    return true;
}
