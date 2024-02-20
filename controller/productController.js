const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,'../data/MOCK_DATA.json'), "utf-8")
let catalogo = JSON.parse(data)

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
        catalogo[catalogo.findIndex(e=>e.id==req.body.id)] = req.body

        res.redirect("/products")
    },
    delete:(req, res)=>{
        console.log(catalogo.length);
        catalogo = catalogo.filter((p)=>p.id != req.params.id)
        console.log("Producto "+req.params.id+" Borrado");
        console.log(catalogo.length);
        res.redirect("products")
    }
}

module.exports = productControllers