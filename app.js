const express = require("express")
const app = express()
const port = 3500

const path = require("path")

const publicpath = path.join(__dirname,"public")
app.use(express.static(publicpath))

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname,"views","index.html"))
})
app.get("/detalle-producto", (req, res)=>{
    res.sendFile(path.join(__dirname,"views","detalle-producto.html"))
})
app.get("/carrito", (req, res)=>{
    res.sendFile(path.join(__dirname,"views","carrito.html"))
})
app.get("/registro", (req, res)=>{
    res.sendFile(path.join(__dirname,"views","registro.html"))
})
app.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname,"views","login.html"))
})



app.listen(port,()=>console.log(`listening port ${port}`))