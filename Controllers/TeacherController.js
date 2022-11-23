
const Teacher= require("../Models/Teacher.model")

class TEACHER{

  createTeacher = async (req) => {

    let teacher= req
    console.log(teacher)
    try {
      const res= await new Teacher(teacher).save();
      return res;
    } catch (error) {
       throw new Error(error);
  }
  };
  


  updateTeacher =  (req) => {
    let data= req
    console.log(data)
    try {
      return Teacher.findByIdAndUpdate(data._id, data.student, {
    new: true,
  })
    .then((teacher) => {
        console.log("Teacher SUCCESS", teacher)
      return teacher;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });



    } catch (error) {
       throw new Error(error);
  }
  };
  
  
  deleteTeacher =  (req) => {
    let data= req
    console.log(data)
    try {
      return Teacher.remove({_id: data._id })
    .then((teacher) => {
      console.log("teacher SUCCESS", teacher)
      return teacher;
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

module.exports = new TEACHER();
