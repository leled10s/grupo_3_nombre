const express = require("express")
const router = require("./routes/mainRoutes")


const app = express()
const port = 3500

const path = require("path")

const publicpath = path.join(__dirname,"public")
app.use(express.static(publicpath))

app.set('view engine', "ejs")

app.use("/", router)
app.use("/detalle-producto/:id",router)
app.use("/carrito",router)
app.use("/login", router)
app.use("/register", router)
app.use("/products", router)
app.use("/products/create", router)


app.listen(port,()=>console.log(`listening port ${port}`))