const express = require('express');
const app = express();

const user = require('./Controllers/UserController')
const product = require('./Controllers/ProductController')
const Student = require('./Controllers/StudentController')
const Teacher = require('./Controllers/TeacherController')
var router = require("express").Router();

var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');
const { request, response } = require('express');

mongoose
  .connect('mongodb://127.0.0.1/TEST_DB')
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Connectivity Error", error);
    process.exit(1);
  });

app.use("/", router);

router.post('/deleteUser',(request,response) => {
  console.log("req", request.body)
  // user.createUser(request.body)
 // user.updateUser(request.body)
  user.deleteUser(request.body)
  response.send("SUCCESS")
});

router.post('/createProduct', (request, response)=>{
  console.log("req", request.body);
  product.createProduct(request.body)
  // product.updateProduct(request.body)
  // product.deleteProduct(request.body)
  response.send("SUCCCESS")
  
})

router.post('/deleteStudent', (request, response)=>{
  console.log("req", request.body);
  // Student.createStudent(request.body)
  // Student.updateStudent(request.body)
  Student.deleteStudent(request.body)
  response.send("SUCCCESS")
  
})

router.post('/createTeacher', (request, response)=>{
  console.log("req", request.body);
  Teacher.createTeacher(request.body)
  // Teacher.updateTeacher(request.body)
  // Teacher.deleteTeacher(request.body)
  response.send("SUCCCESS")
  
})
app.listen(8080, ()=>{
  console.log("Listening to port 8080")
})