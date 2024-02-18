const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,'../data/USER-DATA.json'), "utf-8")
const users = JSON.parse(data)

const userControllers = {
    index:(req, res)=>{
        res.render("index",{catalogo:catalogo})
    },
    crearUsuario:(req, res)=>{
        //metodo POST, envia la informacion del formulario crearUsuario
        res.redirect('')
    },
    formCrearUsuario:(req, res)=>{
        //medoto GET, devuelve el formulario para crear usiario
        res.render("")
    },
    users:(req, res)=>{
        //GET, devuelve la vista con todos lo usuarios
        res.render("", {users:users})
    },
    formEditUser:(req, res)=>{
        //GET, devuelve el form para editar un user
        const user = users.find((u)=>u.id == req.params.id)
        producto?res.render("",{user:user}):res.send("el id no es valido")
    },
    EditUser:(req, res)=>{
        //metodo PUT, envia la informacion del formulario editUser
        res.redirect("")
    },
    deleteUser:(req, res)=>{
        // DELETE
        res.redirect("")
    }
}

module.exports = userControllers