


const controller = {
    index:(req, res)=>{
        res.render("index")

    },
    detalleProducto:(req, res)=>{
        res.render("detalle-producto")
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

module.exports = controller