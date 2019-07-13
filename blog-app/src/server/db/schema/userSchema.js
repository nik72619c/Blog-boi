const mongoose=require('../common/connection');
const Schema=mongoose.Schema;

var userSchema= new Schema({
    'uid': {type: String},
    'username': { type : String },
    'bio': { type: String },
    'email': { type: String },
    'profile_image_url': { type: String },
    'blogs': [{type: Schema.Types.ObjectId, ref: 'Blog'}]
});

var userModel= mongoose.model('User', userSchema);
module.exports=userModel;

