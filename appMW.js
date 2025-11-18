import express from 'express';
const app=express();
// first way to implement mw
function checkRoute(req,resp,next){
console.log("user is accessing "+req.url +  " page");
    next();}
app.use(checkRoute)


// second way
// app.use((req,resp,next)=>{
//     console.log("user is accessing "+req.url +  " page");
//     next();
// })

app.get("/",(req,resp)=>{
    resp.send("Home page")
})

app.get("/users",(req,resp)=>{
    resp.send("users page")
})

app.get("/products",(req,resp)=>{
    resp.send("products page")
})

app.listen(3200)

