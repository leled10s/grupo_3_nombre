const mainController = require("../controller/mainController")
const express = require("express")
const mainRouter = express.Router()
const multer  = require('multer')
const path = require("path")

    const storage = multer.diskStorage({
    destination: function(req, file, cb){
        let folder = path.join(__dirname, '../public/images')
        cb (null, folder)
    },
    filename: function(req, file, cb){
        let imageName = Date.now() + path.extname(file.originalname)
        cb(null, imageName )
    } })
var fileUpLoad = multer({storage:storage})

mainRouter.get("/", mainController.index)


mainRouter.get("/carrito", mainController.carrito)
mainRouter.get("/login", mainController.login)
mainRouter.get("/register", mainController.register)
mainRouter.post("/register", fileUpLoad.single('avatar'), mainController.register)



module.exports = mainRouter 