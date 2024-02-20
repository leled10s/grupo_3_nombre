const productController = require("../controller/productController")
const express = require("express")
const productRouter = express.Router()


productRouter.get("/",productController.products)

productRouter.get("/create",productController.create)
productRouter.post("/create", productController.crearProducto)

productRouter.get("/:id", productController.detalleProducto)
productRouter.put("/:id", productController.editPut)
productRouter.delete("/:id", productController.delete)

productRouter.get("/edit/:id", productController.editForm)



module.exports = productRouter 