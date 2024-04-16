const fs = require("fs")
const path = require("path")

const Product = {

    fileName: path.join(__dirname, "../data/MOCK_DATA.json"),

    findAll: () => {
        return JSON.parse(fs.readFileSync(Product.fileName, "utf-8"))
    },

    findByPk: (id) => {
        const products = Product.findAll()
        const product = products.find(p => p.id == id)
        return product
    },

    findByField: (field, value) => {
        const products = Product.findAll()
        const product = products.find(p => p[field] === value)
        return product
    },

    create: (userData) => {
        const products = Product.findAll()
        products.push(
            {
                id: Product.nextID(),
                ...userData
            }
        )
        fs.writeFileSync(Product.fileName, JSON.stringify(products, null, " "))
        return true
    },

    update:(id, newVals) => {
        const products = User.findAll()
        products[products.findIndex(p=>p.id===id)] = newVals
        fs.writeFileSync(Product.fileName, JSON.stringify(products, null, " "))
        return true
    },

    nextID: () => {
        products = Product.findAll()
        allIDs = []
        products.forEach(u => {
            allIDs.push(u.id)
        })
        return Math.max(...allIDs) + 1
    },
    
    findByPk: (id) => {
        const products = Product.findAll()
        const product = products.find(product => product.id === id)
        return product

    },

    delete: (id)=>{
        const products = Product.findAll()
        const finalUsers = products.filter(product=>product.id!=id)
        fs.writeFileSync(Product.fileName, JSON.stringify(finalUsers, null, ""))
        return true
    }

}

module.exports = Product;