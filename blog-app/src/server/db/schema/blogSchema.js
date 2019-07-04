const mongoose=require('../common/connection');

const schema=mongoose.Schema;
var blogSchema= new schema({
    title: String,
    blogContent : [{
        heading: String,
        content: [String]
    }]
});

var blogSchemaModel=mongoose.model('Blog',blogSchema);
module.exports=blogSchemaModel;