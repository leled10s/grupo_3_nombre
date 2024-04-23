const db = require("../database/models").sequelize.models;
const Product = db.Product

const productControllers = {

    createView:(req, res)=>{
        res.render("products/create")
    },

    create:(req, res)=>{
    
    },

    productsView: async (req, res)=>{
        const products = await Product.findAll()

        res.render("products/products", {catalogo:products})
    },

    productView: async (req, res)=>{
    const producto = await Product.findByPk(Number(req.params.id))
    producto?res.render("products/product",{producto:producto}):res.send("el id no es valido")
    },

    editView: async (req, res)=>{
        const product = await Product.findByPk(Number(req.params.id))
        res.render("products/edit",{producto:product})
    },

    edit: async (req, res)=>{
        await Product.update(req.body.id, req,body)
        res.redirect("/products/list")
    },

    deleteView: async (req, res)=>{
        const product = await Product.findByPk(Number(req.params.id))
        res.render("products/delete", {product:product})
    },

    del: async (req, res)=>{
        await Product.delete(req.params.id)
        res.redirect("/products/list")
    }

}

module.exports = productControllers