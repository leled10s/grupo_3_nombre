const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,'../data/MOCK_DATA.json'), "utf-8")
const catalogo = JSON.parse(data)


const controller = {
    index:(req, res)=>{
        res.render("index",{catalogo:catalogo})

    },
    detalleProducto:(req, res)=>{
        const producto = catalogo.find((p)=>p.id == req.params.id)
        res.render("detalle-producto",{producto:producto})
    },
    carrito:(req, res)=>{
        res.render("carrito")
    },
    register:(req, res)=>{
        res.render("registro")
    },
    login:(req, res)=>{
        res.render("login")
    },
    products:(req, res)=>{
        res.render("products", {catalogo:catalogo})
    },
    create:(req, res)=>{
        res.render("create")
    }
}

module.exports = controller