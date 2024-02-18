const mainController = require("../controller/mainController")
const express = require("express")
const mainRouter = express.Router()

mainRouter.get("/", mainController.index)


mainRouter.get("/carrito", mainController.carrito)
mainRouter.get("/login", mainController.login)
mainRouter.get("/register", mainController.register)



module.exports = mainRouter 