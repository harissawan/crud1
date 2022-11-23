const Product= require("../Models/Product.model")

class PRODUCT{
    createProduct = async(req)=>{
        let product = req
        console.log(product) 
        try{
            const res = await new Product(product).save();
            return res;
        }catch(error){
            throw new Error(error);
        }

    };

updateProduct = (req)=>{
    let data = req
    console.log(data);
    try{
        return Product.fidByIdAndUpdata(data._id, data.product,{
            new: true,
        })
        .then((product)=>{
            console.log("Product SUCCESS", product);
            return product;
        })
        .catch((err)=>{
            console.log("Error", err);
            return false
        })
    }catch(error){
        throw new Error(error);
    }
};
deleteProduct =  (req) => {
    let data= req
    console.log(data)
    try {
      return User.remove({_id: data._id })
    .then((product) => {
      console.log("Product SUCCESS", product)
      return product;
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

module.exports = new PRODUCT();