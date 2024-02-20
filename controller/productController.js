const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,'../data/MOCK_DATA.json'), "utf-8")
const catalogo = JSON.parse(data)

const productControllers = {
    index:(req, res)=>{
        res.render("index",{catalogo:catalogo})
    },
    crearProducto:(req, res)=>{
        form_body = req.body
        console.log(form_body);
        res.redirect('/products/create')
    },
    create:(req, res)=>{
        res.render("crear")
    },
    products:(req, res)=>{
        res.render("products", {catalogo:catalogo})
    },
    detalleProducto:(req, res)=>{
        const producto = catalogo.find((p)=>p.id == req.params.id)
        producto?res.render("detalle-producto",{producto:producto}):res.send("el id no es valido")
    },
    editForm:(req, res)=>{
        const producto = catalogo.find((p)=>p.id == req.params.id)
        res.render("edit-product",{producto:producto})
    },
    editPut:(req, res)=>{

        redirect("/edit")
    },
    delete:(req, res)=>{
        console.log("SE VA A BORRAR EL ID "+req.params.id);
    }
}

module.exports = productControllers