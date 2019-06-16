const mongoose=require('../common/connection');

const schema=mongoose.Schema;
var productSchema= new schema({

    'productid': String,
    'productname': String,
    'producttype': String,
    'productbrand': String,
    'productprice': Number,
    'productquantity': Number,
    
});

var productsModel=mongoose.model('products',productSchema);

module.exports=productsModel;