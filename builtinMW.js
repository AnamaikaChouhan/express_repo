// import express from 'express'
// const app = express();

// app.get("/", (req, resp) => {
//     resp.send("Home Page")
// })
// app.use(express.urlencoded({extended:false}))


// app.get("/login", (req, resp) => {
//     resp.send(`
// <form action="/submit" method="post">
//         <label for="username">Username:</label><br>
//         <input type="text" id="username" name="username" required><br><br>

//         <label for="password">Password:</label><br>
//         <input type="password" id="password" name="password" required><br><br>
//        <button >Login</button>
//     </form>
//         `)
// })
// app.post("/submit", (req, resp) => {
//     console.log("user login details are : " ,req.body);
    
//     resp.send("Successfully Submitted....")
// })

// app.listen(3200)



// static mw
import express from 'express'
import path from 'path'
const app = express();
app.use(express.static('public'))
app.get("/", (req, resp) => {
    const filePath=path.resolve('view/home2.html');
    resp.sendFile(filePath)
})



app.listen(3200)