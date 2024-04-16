const express = require("express")
const userRouter = express.Router()
const multer = require('multer')
const path = require('path')
const profileMiddleware = require("../middleware/profileMiddleware")
const {users, profile, signUpView, signUp, logInView, logIn, editView, edit, deleteView, del} = require("../controller/userController")
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

userRouter.get("/list", users)
userRouter.get("/profile", profileMiddleware,profile)

userRouter.get("/create", signUpView)
userRouter.post("/create", upload.single('avatar'), signUp)

userRouter.get("/login", logInView)
userRouter.post("/login", logIn)

userRouter.get("/edit/:id", editView)
userRouter.put("/edit/:id", edit)

userRouter.get("/delete/:id", deleteView)
userRouter.delete("/delete/:id", del)




module.exports = userRouter 