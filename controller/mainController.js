const db = require("../database/models").sequelize.models;

const mainController = {
    index: async (req, res)=>{
        try {
            products = await db.Product.findAll()
            res.render("index",{catalogo: products})
        } catch (error) {
            console.log(error);
        }
    },
    cart:(req, res)=>{
        res.render("cart")
    }
}

module.exports = mainController