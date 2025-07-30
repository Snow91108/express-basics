// creating an http server
//express
//node default library =>no

const express= require("express");

const app=express();
function sum(n){
    let ans=0;
    for(let i=1;i<=n;i++){
        ans=ans+i;
    }
    return ans;
}
app.get("/",function(req,res){
    const n=req.query.n;
    const name=req.query.name;
     const age=req.query.age;
    const ans=sum(n);
    if(age>=18){
        res.send(name+" adult");
    }else{
        res.send(name+" minor")
    }
    res.send("hi your ans is"+ans);
})

app.listen(3000);