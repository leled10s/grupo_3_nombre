const mainController = require("../controller/mainController")
const express = require("express")
const mainRouter = express.Router()
const guestMiddleware = require("../middleware/guestMiddleware")
const {index, cart, singup, login} = require("../controller/mainController")

mainRouter.get("/", index)


mainRouter.get("/carrito", cart)





module.exports = mainRouter 