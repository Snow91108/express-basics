const express=require("express");
const app=express();

const todo=[{
    id:1,
 title:"task1",
 des:"task one description",
 completed:false
},{
    id:2,
    title:"task2",
    des:"task two description",
    completed:false
}]
app.get("/",function(req,res){
   const id=parseInt(req.query.id)
   const item=todo.find(task => task.id === id);
   console.log(id)

   if(item){
    res.json({
        title:item.title,
        des:item.des,
        completed:item.completed
    })
   }else{
    res.status(404).json({message:"todo not found"})
   }
})


app.listen(4000);
