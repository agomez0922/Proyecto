const Menu = require("../models/Menu");
const menuControllers = {};

menuControllers.showMenu = async (req, res) => {
  res.status(200).json({ message: "Este es el producto"});
};

menuControllers.create = async (req, res) => {

  //if(req.decoded.role === 1){//
    const {_id, name, price, description, type, img} = req.body
    const menu = new Menu({_id, name, price, description, type, img})
    await menu.save()
  
    res.status(201).json({message: "un nuevo producto ha sido creado", menu})} //menu: req.decoded//}) 
//}else {res.status(401).json({message: "Tu no puedes crear un producto"})}}//

menuControllers.getAllMenus = async (req, res) => {
  try {
      const menus = await Menu.find()
      if(menus) res.status(200).json(menus)
      else res.status(202).json({message: "product not found"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}

menuControllers.deleteMenu = async (req, res) => {
  try {
      const deleted = await Menu.deleteMany()

      res.status(202).json({message: "user deleted"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}
module.exports = menuControllers;
