// Utility functions

function showFieldError(field, message) {
    field.classList.add('error');
    const errorDiv = field.parentElement.querySelector('.form-error') || createErrorElement(field);
    errorDiv.textContent = message;
    errorDiv.classList.add('show');
}

function clearFieldError(field) {
    field.classList.remove('error');
    const errorDiv = field.parentElement.querySelector('.form-error');
    if (errorDiv) {
        errorDiv.classList.remove('show');
    }
}

function createErrorElement(field) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    field.parentElement.appendChild(errorDiv);
    return errorDiv;
}

function validateRequired(value, fieldName) {
    if (!value || value.trim() === '') {
        return `${fieldName} es obligatorio`;
    }
    return null;
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Email inválido';
    }
    return null;
}

function validatePasswordStrength(password) {
    if (password.length < 8) {
        return 'Contraseña mínima 8 caracteres';
    }
    return null;
}

function validatePasswordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        return 'Las contraseñas no coinciden';
    }
    return null;
}

function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

function parseDate(dateString) {
    // Expects dd/mm/yyyy format
    if (!dateString || dateString.length !== 10) return null;
    const parts = dateString.split('/');
    if (parts.length !== 3) return null;
    const date = new Date(parts[2], parts[1] - 1, parts[0]);
    return date.toISOString().split('T')[0];
}

function getRoleBadge(role) {
    const roles = {
        'admin': { color: 'danger', label: 'Admin' },
        'coach': { color: 'primary', label: 'Coach' },
        'user': { color: 'success', label: 'Usuario' }
    };
    const roleInfo = roles[role] || { color: 'secondary', label: 'Desconocido' };
    return `<span class="badge bg-${roleInfo.color}">${roleInfo.label}</span>`;
}

function showLoading(element) {
    element.innerHTML = '<div class="spinner"></div> Cargando...';
    element.disabled = true;
}

function hideLoading(element, text) {
    element.innerHTML = text;
    element.disabled = false;
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        modal.classList.remove('show');
    }
}