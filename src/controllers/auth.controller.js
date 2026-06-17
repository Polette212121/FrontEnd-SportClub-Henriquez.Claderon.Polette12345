const authService = require('../services/auth.service');
const userService = require('../services/user.service');
const { success } = require('../utils/api-response');
const { validateLoginPayload } = require('../validators/auth.validator');
const { validateUserPayload } = require('../validators/user.validator');

async function login(req, res, next) {
  try {
    const { isValid, errors } = validateLoginPayload(req.body);
    if (!isValid) {
      return res.status(400).json({ ok: false, message: 'Payload inválido.', errors });
    }

    const result = await authService.login(req.body);
    return success(res, 'Login exitoso.', result);
  } catch (error) {
    next(error);
  }
}

async function registerUser(req, res, next) {
  try {
    const { isValid, errors, data } = validateUserPayload(req.body, { forceRole: 'user' });
    if (!isValid) {
      return res.status(400).json({ ok: false, message: 'Payload inválido.', errors });
    }

    const user = await userService.createUser(data);
    return success(res, 'Usuario registrado correctamente.', user, 201);
  } catch (error) {
    next(error);
  }
}

function me(req, res) {
  return success(res, 'Usuario autenticado.', req.user);
}

module.exports = {
  login,
  registerUser,
  me
};
