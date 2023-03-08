const AuthController = require('../controllers/authController');
const {validationMiddleware, userSchema} = require('../middlewares/validation');
const Router = require('express').Router;
const router = Router();

router.post('/register', validationMiddleware(userSchema), AuthController.createUser);
router.post('/login', validationMiddleware(userSchema), AuthController.loginUser);
router.get('/token/validate', AuthController.checkTokenValidity);
module.exports = { router };
