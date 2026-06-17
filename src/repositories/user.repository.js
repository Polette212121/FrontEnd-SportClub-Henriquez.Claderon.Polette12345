const { User } = require('../models');

const findAll = (filters = {}) => User.findAll({ where: filters, order: [['id', 'ASC']] });
const findById = (id, options = {}) => User.findByPk(id, options);
const findByEmail = (email, options = {}) => User.findOne({ where: { email: String(email).toLowerCase() }, ...options });
const create = (payload) => User.create(payload);

async function updateById(id, payload) {
  const user = await User.scope('withPassword').findByPk(id);
  if (!user) return null;
  await user.update(payload);
  return User.findByPk(id);
}

module.exports = {
  findAll,
  findById,
  findByEmail,
  create,
  updateById
};
