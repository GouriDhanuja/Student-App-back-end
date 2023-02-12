// import mongoose

const mongoose = require('mongoose');

//define the connction string

mongoose.connect('mongodb://localhost:27017/stdapp',()=>{
    console.log('connected to mongodb');
})

//create a model for the courses

const Course=mongoose.model('Course',{
    //schema creation
   
    id:Number,
    name:String,
    description:String,
    image:String,
    fee:Number

})

module.exports={
    Course
}