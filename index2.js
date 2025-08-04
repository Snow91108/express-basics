const express= require("express");
const app=express();

const users=[{
    name: "john",
    kidneys:[{
        healthy:false
    }]
}];

app.use(express.json());

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
numOfKidneys,
numOfHealthyKidneys,
unHealthyKidneys
 })
})

app.post("/",function(req,res){
    const isHealthy= req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    })
    res.json({
        msg:"Done!"
    })

})

app.put("/",function (req,res) {
    for(let i=0;i<users[0].kidneys.length;i++){
    users[0].kidneys[i].healthy= true;
    }

    res.json({

})
})

//removing all the unhealthy kidneys

app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidneys()){
         const newKidneys=[];
    for(let i=0;i<users[0];i++){
        if(users[0],kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
      users[0].kidneys=newKidneys;
    res.json({msg:"done"})
    }else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        });
    }
});

function isThereAtleastOneUnhealthyKidneys(){
    let atleastOneUnHealthykidney=false;
    for(let i=0;i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnHealthykidney=true;
        }
    }
    return atleastOneUnHealthykidney;
}


app.listen(3000);
