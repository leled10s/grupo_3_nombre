const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,'../data/USER-DATA.json'), "utf-8")
const users = JSON.parse(data)



const userControllers = {
    users:(req, res)=>{
            //GET, devuelve la vista con todos lo usuarios
            res.render("users.ejs", {users:users})
        },
        crearUsuario:(req, res)=>{
            //metodo POST, envia la informacion del formulario crearUsuario
            
            const newUser = {
                id: Date.now(),
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                usuario: req.body.usuario,
                email: req.body.email,
                password: req.body.password,
                telefono: req.body.telefono,
                avatar: req.file ? req.file.filename : 'user-icon.jpg', 
			
		}



        console.log(newUser);
		// Agregamos el nuevo producto al listado
		users.push(newUser)
		// Convertimos a json el objeto javascript
		let productsJSON = JSON.stringify(users, null, ' ')
		// Escribimos el json
		fs.writeFileSync(path.join(__dirname,'../data/USER-DATA.json'), productsJSON)

        
        res.redirect('/users')
    },
    formCrearUsuario:(req, res)=>{
        //medoto GET, devuelve el formulario para crear usiario
        res.render("registro.ejs")
    },
    formEditUser:(req, res)=>{
        //GET, devuelve el form para editar un user
        const user = users.find((u)=>u.id == req.params.id)
        user?res.render("",{user:user}):res.send("el id no es valido")
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