const db = require("../database/models").sequelize.models;

const bcrypt = require('bcrypt')
const sal = 12

const User = db.User

const userControllers = {
    users: (req, res) => {
        const allUsers = User.findAll()
        //GET, devuelve la vista con todos lo usuarios
        res.render("users/users", { users: allUsers })
    },

    profile: (req, res) => {
        const loggedUser = req.session.user
        console.log(loggedUser);
        res.render("users/profile",{loggedUser})
    },

    signUpView: (req, res) => {
        //medoto GET, devuelve el formulario para crear usiario
        res.render("users/signUp")
    },

    signUp: (req, res) => {
        //metodo POST, envia la informacion del formulario crearUsuario
        const { password, ...userData } = req.body

        const newUser = {
            password: bcrypt.hashSync(password, sal),
            ...userData
        }

        User.create(newUser)

        res.redirect('/users')
    },

    logInView: (req, res) => {
        res.render("users/logIn")
    },

    logIn: (req, res) => {
        let user = User.findByField("usuario", req.body.usuario)
        if (user) {
            loginPass = bcrypt.hashSync(req.body.password, sal)

            if (bcrypt.compareSync(req.body.password, user.password)) {
                delete user.password
                req.session.user = user
                res.redirect("/users/profile")
            } else {
                res.redirect("/")
            }
        } else {
            res.send("usuario o contraseña no valido")
        }
    },

    editView: (req, res) => {
        //GET, devuelve el form para editar un user
        const user = User.findByPk(req.params.id)
        user ? res.render("", { user: user }) : res.send("el id no es valido")
    },

    edit: (req, res) => {
        //metodo PUT, envia la informacion del formulario editUser
        res.redirect("")
    },

    deleteView: (req, res) => {
        // DELETE
        User.delete(req.params.id)
        res.redirect("")
    },

    del: (req, res) => {
        console.log(req.session);
        res.render("profile", { loggedUser: req.session.loggedUser })
    }
}
module.exports = userControllers