const userRepository = require('../repositories/user.repository');
const { signAccessToken } = require('../utils/jwt');

async function login({ email, password }) {
  const user = await userRepository.findByEmail(email, { attributes: { include: ['password'] } });

  if (!user) {
    const error = new Error('Credenciales inválidas.');
    error.statusCode = 401;
    throw error;
  }

  const isValid = await user.isPasswordValid(password);
  if (!isValid) {
    const error = new Error('Credenciales inválidas.');
    error.statusCode = 401;
    throw error;
  }

  const token = signAccessToken(user);

  return {
    token,
    user: user.toSafeJSON()
  };
}

module.exports = {
  login
};
