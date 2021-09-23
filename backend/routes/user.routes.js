const { Router } = require('express')
const usersControllers = require('../controllers/user.controllers')
const router = Router();
//const tokenFunctions = require('../middlewares/verifyToken')


router.post('/signup', usersControllers.signup)
router.post('/signin', usersControllers.signin)
router.put("/updateUser/:id_user", usersControllers.updateUser)
router.get("/getAllUsers", usersControllers.getAllUsers)
router.get("/getUserById/:id_user", usersControllers.getUserById)
router.delete("/deleteUser/:id_user", usersControllers.deleteUser)
module.exports = router