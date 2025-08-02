const express = require("express")
const app = express()
const products = ["vegetable","fruits","flowers"]
app.get("/products",(req,res)=>{
    // const id = req.query.id
    res.json({
        product:products
    })
})
// /route parameters

app.get("/products/:id",(req,res)=>{
    const id = req.params
    console.log(id)
    res.json({
        product:products[id.id]
    })
})



app.listen(3000,()=>{
    console.log("App is running at port http://localhost:3000/")
})