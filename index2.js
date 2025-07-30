const express= require("express");
const app=express();

const users=[{
    name: "john",
    kidneys:[{
        healthy:false
    }]
}];

//query parameters
app.get("/",function(req,res){
 const johnKidneys=users[0].kidneys;
 const numOfKidneys=johnKidneys.length;
 let numOfHealthyKidneys=0;

 for(let i=0;i<johnKidneys.length;i++){
    if(johnKidneys[i].healthy){
        numOfHealthyKidneys=numOfHealthyKidneys+1;
    }
 }
 const unHealthyKidneys=numOfKidneys-numOfHealthyKidneys;
 res.json({
johnKidneys,
numOfHealthyKidneys,
unHealthyKidneys
 })
})

app.post("/",function(req,res){

})


app.listen(4000);
