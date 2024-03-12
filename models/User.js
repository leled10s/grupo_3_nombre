const fs = require("fs")
const path = require("path")

const User = {

    fileName: path.join(__dirname, "../data/USER-DATA.json"),

    findAll: () => {
        return JSON.parse(fs.readFileSync(User.fileName, "utf-8"))
    },

    findByPk: (id) => {
        const users = User.findAll()
        const user = users.find(user => user.id === id)
        return user
    },

    findByField: (field, value) => {
        const users = User.findAll()
        const user = users.find(user => user[field] === value)
        return user
    },

    create: (userData) => {
        const users = User.findAll()
        users.push(
            {
                id: User.nextID(),
                ...userData
            }
        )
        fs.writeFileSync(User.fileName, JSON.stringify(users, null, " "))
        return true
    },

    nextID: () => {
        users = User.findAll()
        allIDs = []
        users.forEach(u => {
            allIDs.push(u.id)
        })
        return Math.max(...allIDs) + 1
    },
    
    findByPk: (id) => {
        const users = User.findAll()
        const user = users.find(user => user.id === id)
        return user

    },

    delete: (id)=>{
        const users = User.findAll()
        const finalUsers = users.filter(user=>user.id!=id)
        fs.writeFileSync(User.fileName, JSON.stringify(finalUsers, null, ""))
        return true
    }

}

const newUser = {
    avatar: "picpath" ,
    nombre: "rick",
    apellido:"sanchez",
    usuario: "pickleRick",
    email: "rick@wuba",
    password:3434,
    telefono: 2342342
}
let {password, ...rest} = newUser

//console.log(password);
//console.log("##########");
//console.log(rest);

module.exports = User;