// ese mw jo specific route pr apply hote hai route mw kahalate hai
import express from 'express'
const app = express();

function checkAgeRouteMW(req, resp, next) {
    console.log(req.query.age);
    if (!req.query.age || req.query.age < 18) {
        resp.send("You are not allowed to used this website")
    }
    else {
        next();
    }
}
function checkURLRouteMW(req,resp,next){
    console.log("this url is: " + req.url);
    next();
    
}

app.get("/", (req, resp) => {
    resp.send("<h1>Home Page</h1>")
})

app.get("/login", checkAgeRouteMW, (req, resp) => {
    resp.send("<h1>login Page</h1>")
})
app.get("/users", checkAgeRouteMW,checkURLRouteMW, (req, resp) => {
    resp.send("<h1>users Page</h1>")
})
app.get("/products", checkAgeRouteMW, (req, resp) => {
    resp.send("<h1>products Page</h1>")
})
app.listen(3200)
