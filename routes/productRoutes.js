const productController = require("../controller/productController")
const express = require("express")
const productRouter = express.Router()

productRouter.get("/", productController.index)

productRouter.get("/products",productController.products)

productRouter.get("/products/create",productController.create)
productRouter.post("/products/create", productController.crearProducto)

productRouter.get("/products/:id", productController.detalleProducto)
productRouter.put("/products/:id", productController.editPut)
productRouter.delete("/products/:id", productController.delete)

productRouter.get("/products/:id/edit", productController.editForm)



module.exports = productRouter 