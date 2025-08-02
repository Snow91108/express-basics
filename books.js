const express=require("express")
const app=express()

app.use(express.json());

let books=[
    {id:1, title:"doGoodThings", author:"you"},
    {id:2, title:"nothingIsBad", author:"me"},
    {id:3, title:"onlyForMyself", author:"mind"}
];

app.get("/books",(req,res)=>{
    res.json(books);
})

app.get("/books/:id",(req,res)=>{
    const books=books.find(b=>b.id===parseInt(req.params.id));
    if(!books) return res.status(404).json({msg :"book not found"})
        res.json(book);
});




app.listen(3000, () => {
  console.log("Server running on port 3000");
});