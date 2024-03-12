const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname, '../data/USER-DATA.json'), "utf-8")
const users = JSON.parse(data)
const bcrypt = require('bcrypt')
const sal = 12

const User = require('../models/User')

const userControllers = {
    users: (req, res) => {
        const allUsers = User.findAll() 
        //GET, devuelve la vista con todos lo usuarios
        res.render("users.ejs", { users: allUsers })
    },

    formCrearUsuario: (req, res) => {
        //medoto GET, devuelve el formulario para crear usiario
        res.render("registro.ejs")
    },

    crearUsuario: (req, res) => {
        //metodo POST, envia la informacion del formulario crearUsuario
        const {password, ...userData}=req.body

        const newUser = {
            password: bcrypt.hashSync(password, sal),
            ...userData
        }

        User.create(newUser)

        res.redirect('/users')
    },

    login:(req, res)=>{
        let user = User.findByField("usuario", req.body.usuario)
        if(user){
            loginPass = bcrypt.hashSync(req.body.password,sal)

            if(bcrypt.compareSync(req.body.password, user.password)){
                delete user.password 
                req.session.loggedUser = user
                res.redirect("/profile")
            }else{
                res.send("cant log in")
            }
        }else{
            res.send("usuario o contraseña no valido")
        }
    },

    formEditUser: (req, res) => {
        //GET, devuelve el form para editar un user
        const user = User.findByPk(req.params.id)
        user ? res.render("", { user: user }) : res.send("el id no es valido")
    },

    EditUser: (req, res) => {
        //metodo PUT, envia la informacion del formulario editUser
        res.redirect("")
    },

    deleteUser: (req, res) => {
        // DELETE
        User.delete(req.params.id)
        res.redirect("")
    },

    profile:(req, res)=>{

        res.render("profile", {loggedUser:req.session.loggedUser})
    }
}
module.exports = userControllers