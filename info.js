const express=require("express")
const app=express()

const information=[{
     id:1,
     name:"raju",
     age:28,
     gender:"male"
},{
    id:2,
    name:"manju",
    age:23,
    gender:"male"
},{
    id:3,
    name:"jaggu",
    age:24,
    gender:"male"
}]

app.get("/information",(req,res)=>{
    const id=req.query.id
    console.log(information[id])

    res.json({
        info:information[id]
    })

})


app.listen(4000);