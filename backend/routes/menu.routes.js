const { Router } = require('express')
const menuControllers = require('../controllers/menu.controllers');
const router = Router();
//const tokenFunctions = require('../middlewares/verifyToken')



//router.get('/laruta', el middleware, el controlador)
router.get('/showAll',  menuControllers.showMenu) //tokenFunctions.verifyToken,//
router.post('/create',  menuControllers.create) //tokenFunctions.verifyToken,//
router.get("/getAllMenus", menuControllers.getAllMenus)
router.delete("/deleteMenu", menuControllers.deleteMenu)
//router.put("/updateManu/:_id", menuControllers.updateMenu)
module.exports = router