import express from 'express'
import userData from './users.json' with {type:'json'}
const app=express();

app.get("/",(req,resp)=>{
    resp.send(userData)
        
})

app.get("/users/:id",(req,resp)=>{
    const id=req.params.id
    console.log(id);
    let filteredData = userData.filter((user)=>user.id==id)
    resp.send(filteredData)
    
})

app.get("/username/:names",(req,resp)=>{
    const names=req.params.names
    console.log(names);
    let filteredData = userData.filter((user)=>user.names.toLowerCase()==names)
    resp.send(filteredData)
    
})




app.listen(4500)

