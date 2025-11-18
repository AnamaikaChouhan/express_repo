import express from 'express';
import home from './pages/home.js';
import login from './pages/login.js';
import submit from './pages/submit.js';


const app =express();


// app.get("",(req,resp)=>{
//     resp.send("<h1>Home Page</h1>")
// })
// app.get("/login",(req,resp)=>{
//     // resp.send("<h1>login Page</h1>")
//     resp.send(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder ="Enter Name"/>
//         <br> <br> 
//         <input type="passdword" placeholder="Enter Password"/>
//         <br> <br>
//         <button >Login</button>
//         `)
// })
// app.post("/submit",(req,resp)=>{
//     resp.send("<h1>submit Page</h1>")
// })


// alg alg files se leke aana data

app.get("/",(req,resp)=>{
    resp.send(home());
})
app.get("/login",(req,resp)=>{
 resp.send(login());
})
app.post("/submit",(req,resp)=>{
 resp.send(submit());
})
app.listen(6500)