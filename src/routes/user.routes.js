const { Router } = require('express');
const userController = require('../controllers/user.controller');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

router.use(authenticate);
router.get('/', userController.getAll);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/:id', userController.update);

module.exports = router;
