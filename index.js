//import express

const express = require('express');

//import cors

const cors = require('cors')

//import dataservices
const dataservices = require('./services/dataservice');

//create a application using express

const app = express()

//use json parser for server response

app.use(express.json())
//using cors specify the origin to the server

app.use(cors({
    origin:'http://localhost:4200'
}))
//set up a portnumber

app.listen(3000,()=>{
    console.log('listening on port:3000');
})
// Api call to get all courses

app.get('/all-courses',(req,res)=>{
    dataservices.getCourses().then(
        result=>{
            res.status(result.statuscode).json(result)
        }
    )
})
