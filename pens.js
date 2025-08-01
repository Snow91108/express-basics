const express=require("express")
const app= express();

const pens=["Blue","red","black"]

app.get("/pens",(req,res)=>{
const id= req.query.id
console.log(id)
res.json({
    pen:pens[id]
})
})


app.listen(5000);



