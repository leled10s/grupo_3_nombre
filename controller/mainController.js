const fs = require('fs')
const path = require("path")
const data = fs.readFileSync(path.join(__dirname,'../data/MOCK_DATA.json'), "utf-8")
const catalogo = JSON.parse(data)



const mainController = {
    index:(req, res)=>{
        try {
            res.render("index",{catalogo: catalogo})
        } catch (error) {
            console.log(error);
        }
    },
    cart:(req, res)=>{
        res.render("cart")
    }
}

module.exports = mainController