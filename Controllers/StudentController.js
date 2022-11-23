
const Student= require("../Models/Student.model")

class STUDENT{

  createStudent = async (req) => {

    let student= req
    console.log(student)
    try {
      const res= await new Student(student).save();
      return res;
    } catch (error) {
       throw new Error(error);
  }
  };
  


  updateStudent =  (req) => {
    let data= req
    console.log(data)
    try {
      return Student.findByIdAndUpdate(data._id, data.student, {
    new: true,
  })
    .then((student) => {
        console.log("Student SUCCESS", student)
      return student;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });



    } catch (error) {
       throw new Error(error);
  }
  };
  
  
  deleteStudent =  (req) => {
    let data= req
    console.log(data)
    try {
      return Student.remove({_id: data._id })
    .then((student) => {
      console.log("student SUCCESS", student)
      return student;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });



    } catch (error) {
       throw new Error(error);
  }
  };

  

}

module.exports = new STUDENT();
