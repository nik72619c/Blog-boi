const mongoose=require('../common/connection');
const schema=mongoose.Schema;
var adminSchema= new schema({

 'username': String,
 'password': String,
 'role': String
    
});

var adminModel=mongoose.model('admins',adminSchema);

module.exports=adminModel;