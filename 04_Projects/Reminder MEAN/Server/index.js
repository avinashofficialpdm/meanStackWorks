const express = require('express')


const app = express()

const dataService= require('./services/dataservices')

const cors = require('cors')
const req = require('express/lib/request')

app.use(cors({
    origin: 'http://localhost:4200'
}))

app.use(express.json())




app.post('/register', (req, res) => {
    //asynchronous
    dataService.register(req.body.uname,req.body.name, req.body.pswd)
        .then(result => {
            res.status(result.statusCode).json(result);
        })
})

app.post('/login',(req,res)=>{
    dataService.login(req.body.uname,req.body.pswd)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
})

app.post('/addEvent',(req,res)=>{
    dataService.addEvent(req.body.date,req.body.event,req.body.user)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
})

app.post('/viewEvent',(req,res)=>{
    dataService.viewEvent(req.body.user)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
})


app.post('/deleteEvent',(req,res)=>{
    dataService.deleteEvent(req.body.user,req.body.date,req.body.event)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
})

app.post('/editEvent',(req,res)=>{
    dataService.editEvent(req.body.user,req.body.eventName,req.body.eventDate,req.body.newEventName)
    .then(result=>{
        res.status(result.statusCode).json(result);
    })
})

app.listen(3000, () => {
    console.log("server started at port no:3000")
})