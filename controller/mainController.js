const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,'../data/MOCK_DATA.json'), "utf-8")
const catalogo = JSON.parse(data)



const mainController = {
    index:(req, res)=>{
        res.render("index",{catalogo:catalogo})
    },
    carrito:(req, res)=>{
        res.render("carrito")
    },
    register:(req, res)=>{
        res.render("registro")
    },
    login:(req, res)=>{
        res.render("login")
    }
}

module.exports = mainController