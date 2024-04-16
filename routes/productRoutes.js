const express = require("express")
const {createView, create, productsView, productView, editView, edit, deleteView, del} = require("../controller/productController")
const productRouter = express.Router()



productRouter.get("/list",productsView)

productRouter.get("/create",createView)
productRouter.post("/create", create)

productRouter.get("/:id", productView)

productRouter.get("/delete/:id", deleteView)
productRouter.delete("/delete/:id", del)

productRouter.get("/edit/:id", editView)
productRouter.put("/edit/:id", edit)


module.exports = productRouter 