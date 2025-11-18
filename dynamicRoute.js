import express from 'express';
const app=express();


app.get("/",(req,resp)=>{
    const users =['anil','sam','peter','raj'];
    let data =``;
    for(let i=0;i<users.length; i++){
        data+=`<li><a href="user/${users[i]}">${users[i]}</li>`
        console.log(users[i]);
    }
   
    resp.send(data)
})

app.get("/user/:name",(req,resp)=>{
    console.log(req.params.name);
   let userName=req.params.name;
    userName =userName.charAt(0).toUpperCase() + userName.slice(1);
    resp.send(`This is ${userName}'s profile  page`)
})

app.listen(3200)
