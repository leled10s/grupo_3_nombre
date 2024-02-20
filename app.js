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
app.use("/products", productRouter)
app.use("/users", userRouter)


app.listen(port,()=>console.log(`listening port ${port}`))

module.exports = app