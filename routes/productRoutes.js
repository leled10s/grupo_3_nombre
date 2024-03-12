const productController = require("../controller/productController")
const express = require("express")
const productRouter = express.Router()


productRouter.get("/",productController.index)

productRouter.get("/products",productController.products)

productRouter.get("/products/create",productController.create)
productRouter.post("/products/create", productController.crearProducto)

productRouter.get("/products/:id", productController.detalleProducto)
productRouter.delete("/products/delete/:id", productController.delete)

productRouter.get("/products/edit/:id", productController.editForm)
productRouter.put("/products/edit/:id", productController.editPut)


module.exports = productRouter 