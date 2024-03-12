const userController = require("../controller/userController")
const express = require("express")
const userRouter = express.Router()
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
      destination: (req, file, cb) => {
          cb(null, 'public/images/avatars')
      },
      filename: (req, file, cb) => {
          // let fileName = `${Date.now()}_img${(file.originalname)}`
          let fileName = `img_${Date.now()}${path.extname(file.originalname)}`
          cb(null, fileName)
      }
  })

  const upload = multer({ storage })

userRouter.get("/users", userController.users)

userRouter.get("/profile",userController.profile)

userRouter.get("/users/create", userController.formCrearUsuario)
userRouter.post("/users/create", upload.single('avatar'),  userController.crearUsuario)

userRouter.post("/users/login", userController.login)

userRouter.put("/users/:id", userController.EditUser)

userRouter.delete("/users/:id", userController.deleteUser)

userRouter.get("/users/edit/:id", userController.formEditUser)



module.exports = userRouter 