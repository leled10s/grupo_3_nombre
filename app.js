const express = require("express")
const session = require("express-session")
const methodOverride = require("method-override")
const app = express()

const port = 3500

const path = require("path")

const publicpath = path.join(__dirname,"public")
app.use(express.static(publicpath))
app.use("/products", express.static(publicpath))
app.use("/users", express.static(publicpath))

app.set('view engine', "ejs")

app.use(methodOverride("_method"))

app.use(session({
    secret:"WubbaLubbaDubDub",
    resave:false,
    saveUninitialized:false,
}))

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(require("./routes/mainRoutes"))
app.use("/products" ,require("./routes/productRoutes"))
app.use("/users" ,require("./routes/userRoutes"))


app.listen(port,()=>console.log(`http://localhost:${port}`))