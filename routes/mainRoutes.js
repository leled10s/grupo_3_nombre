const controller = require("../controller/mainController")
const express = require("express")
const router = express.Router()

router.get("/", controller.index)
router.get("/detalle-producto", controller.detalleProducto)
router.get("/carrito", controller.carrito)
router.get("/login", controller.login)
router.get("/register", controller.register)


module.exports = router 