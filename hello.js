// import express from 'express';
// import path from 'path';

// const app = express();

// app.get("/", (req,resp)=>{
//     const absPath = path.resolve('view/home.html')
//     resp.sendFile(absPath)
// })
// app.get("/login", (req,resp)=>{
//     const absPath = path.resolve('view/login.html')
//     resp.sendFile(absPath)
// })
// app.get("/about", (req,resp)=>{
//     const absPath = path.resolve('view/about.html')
//     resp.sendFile(absPath)
// })
// app.use((req,resp)=>{
//     const absPath = path.resolve('view/404.html')
//     resp.status(400).sendFile(absPath)
// })
// app.listen(3200)


// -------------------------
import express from 'express';
import path from 'path';

const app = express();
const absPath = path.resolve('view')
const publicPath = path.resolve('public')


app.use(express.static(publicPath));
// console.log(publicPath);


app.get("/", (req, resp) => {

    resp.sendFile(absPath + "/home.html")
})
app.get("/login", (req, resp) => {
    resp.sendFile(absPath + "/login.html")
})
app.get("/about", (req, resp) => {
    resp.sendFile(absPath + "/about.html")
})
app.use((req, resp) => {
    const absPath = path.resolve('view/404.html')
    resp.status(404).sendFile(absPath)
})
app.listen(3200)