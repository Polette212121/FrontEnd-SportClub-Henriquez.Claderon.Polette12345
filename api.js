const API_BASE_URL = 'http://localhost:3000/api';

// Helper function to get stored token
function getToken() {
    return localStorage.getItem('token');
}

// Helper function to get auth headers
function getAuthHeaders() {
    const token = getToken();
    return {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` })
    };
}

// Auth API
const authAPI = {
    login: async (email, password) => {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return { ok: response.ok, data };
    },

    register: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return { ok: response.ok, data };
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getProfile: async () => {
        const response = await fetch(`${API_BASE_URL}/auth/me`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        const data = await response.json();
        return { ok: response.ok, data };
    },

    updateProfile: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/auth/me`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(data.user));
        }
        return { ok: response.ok, data };
    },

    changePassword: async (currentPassword, newPassword) => {
        const response = await fetch(`${API_BASE_URL}/auth/me/password`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify({ currentPassword, newPassword })
        });
        const data = await response.json();
        return { ok: response.ok, data };
    }
};

// Users API (Admin)
const usersAPI = {
    getAll: async () => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        const data = await response.json();
        return { ok: response.ok, data };
    },

    getById: async (id) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'GET',
            headers: getAuthHeaders()
        });
        const data = await response.json();
        return { ok: response.ok, data };
    },

    create: async (userData) => {
        const response = await fetch(`${API_BASE_URL}/users`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        return { ok: response.ok, data };
    },

    update: async (id, userData) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify(userData)
        });
        const data = await response.json();
        return { ok: response.ok, data };
    },

    delete: async (id) => {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        const data = await response.json();
        return { ok: response.ok, data };
    }
};

// Export APIs
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { authAPI, usersAPI, getToken, getAuthHeaders };
}
