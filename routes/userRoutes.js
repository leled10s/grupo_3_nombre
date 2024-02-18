const userController = require("../controller/userController")
const express = require("express")
const userRouter = express.Router()

userRouter.get("/", userController.index)

userRouter.get("/users",userController.users)

userRouter.get("/users/create",userController.crearUsuario)
userRouter.post("/users/create", userController.formCrearUsuario)

userRouter.put("/users/:id", userController.EditUser)
userRouter.delete("/users/:id", userController.deleteUser)

userRouter.get("/users/:id/edit", userController.formEditUser)



module.exports = userRouter 