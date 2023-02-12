//import db

const db = require('./db')

//get all course details from db
const getCourses=()=>{
 return  db.Course.find().then(
       (result)=>{
          if(result){

            return{
            status:true,
            statuscode:200,
            stds:result
          }
        }
        else{
            return{
                status:false,
                statuscode:402,
                message:'course not found'
              }
        }
        }
    )
}
module.exports={
    getCourses
}