const User = require("../models/User");
const usersControllers = {};

const jwt = require("jsonwebtoken");

usersControllers.signup = async (req, res) => {
  console.log(req.body)
  const { email, password, role } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).json({ message: "Usuario ya existe!" });
  } else {
    console.log(role)
    const newUser = new User({ email, password, role });
    await newUser.save();

    //const token = jwt.sign({_id: newUser._id, email: newUser.email}, "pato")

    res.status(201).json({ message: "Usuario creado", newUser });
  }
};

usersControllers.signin = async (req, res) => {
  //escribimos en el formulario
  const { email, password } = req.body;

  //lo que me devuelve la base de datos
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ message: "Usuario no existe" });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: "La contraseña es incorrecta!" });
  }

  const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, "pato");

  res.status(200).json({ message: "Tu estas logueado correctamente", token });
};

module.exports = usersControllers;

usersControllers.updateUser = async (req, res) => {

  try{
      console.log(req.params)
      const idUser = req.params.id_user

      const updatedUser = await User.findByIdAndUpdate(idUser, req.body, {new: true})

      if(updatedUser) res.status(201).json({message: "Usuario Actualizado", updatedUser})
      else res.status(202).json({message: "El usuario no existe"})
  } catch (error){
      console.log(error)
      res.status(400).json({error})
  }
}

usersControllers.getAllUsers = async (req, res) => {
  try {
      const users = await User.find()

      if(users) res.status(200).json(users)
      else res.status(202).json({message: "users not found"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}

usersControllers.getUserById = async (req, res) => {
  try {
      const user = await User.findById(req.params.id_user)

      if(user) res.status(200).json({message: "user found", user})
      else res.status(202).json({message: "user not found"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}

usersControllers.deleteUser = async (req, res) => {
  try {
      const deleted = await User.findByIdAndDelete(req.params.id_user)

      res.status(202).json({message: "user deleted"})
  } catch (error) {
      res.status(400).json({message: "Error", error})
  }
}

