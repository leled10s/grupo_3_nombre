const express = require("express")
const mainRouter = require("./routes/mainRoutes")
const productRouter = require("./routes/productRoutes")
const userRouter = require("./routes/userRoutes")

const methodOverride = require("method-override")

const app = express()
const port = 3500

const path = require("path")

const publicpath = path.join(__dirname,"public")
app.use(express.static(publicpath))

app.set('view engine', "ejs")

app.use(methodOverride("_method"))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/", mainRouter)
app.use("/carrito",mainRouter)
app.use("/login", mainRouter)
app.use("/register", mainRouter)

app.use("/", productRouter)
app.use("/products", productRouter)
app.use("/products/create", productRouter)
app.use("/products/:id",productRouter)
app.use("/products/:id/edit",productRouter)

app.use("/", userRouter)
app.use("/users", userRouter)
app.use("/users/create", userRouter)
app.use("/users/:id",userRouter)
app.use("/users/:id/edit",userRouter)


app.listen(port,()=>console.log(`listening port ${port}`))