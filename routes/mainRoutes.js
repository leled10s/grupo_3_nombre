const controller = require("../controller/mainController")
const express = require("express")
const router = express.Router()

router.get("/", controller.index)
router.get("/detalle-producto/:id", controller.detalleProducto)
router.get("/carrito", controller.carrito)
router.get("/login", controller.login)
router.get("/register", controller.register)
router.get("/products",controller.products)
router.get("/products/create",controller.create)

module.exports = router 