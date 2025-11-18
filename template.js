import express from 'express'

const app = express();


app.set('view engine', 'ejs')
app.get("/",(req,resp)=>{
    resp.render('home',{name:'Anil', ytChannel:'code step bt step', age:29})
})
app.listen(3200)