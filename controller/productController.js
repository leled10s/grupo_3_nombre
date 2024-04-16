const Product = require('../models/Product')

const productControllers = {

    createView:(req, res)=>{
        res.render("products/create")
    },

    create:(req, res)=>{
    
    },

    productsView:(req, res)=>{
        const products = Product.findAll()
        res.render("products/products", {catalogo:products})
    },

    productView:(req, res)=>{
    console.log(typeof req.params.id);
    const producto = Product.findByPk(Number(req.params.id))
    producto?res.render("products/product",{producto:producto}):res.send("el id no es valido")
    },

    editView:(req, res)=>{
        const product = Product.findByPk(Number(req.params.id))
        console.log(req.params.id)
        console.log(product)
        //console.log(Product.findAll());
        res.render("products/edit",{producto:product})
    },

    edit:(req, res)=>{
        Product.update(req.body.id, req,body)
        res.redirect("/products/list")
    },

    deleteView:(req, res)=>{
        const product = Product.findByPk(Number(req.params.id))
        res.render("products/delete", {product:product})
    },

    del:(req, res)=>{
        Product.delete(req.params.id)
        res.redirect("/products/list")
    }

}

module.exports = productControllers