const User= require('../db/schema/userSchema');
const Blog= require('../db/schema/blogSchema');

var blogOperations={
    createBlog: (blog, req, res)=>{
        //TODO function for creating and saving a new blog
        console.log('blog received', blog);
        //imitating fake data for now, to be updated

        try{
            var blogInstance=new Blog({
                blogContent: [blog]
            });
            User.findOne({email: 'nikhil@gmail.com'}, (err, content)=>{
                    if(err){
                        res.status(500).json({err});
                    }
                    else{
                        let user=new User({
                            email: 'nikhil@gmail.com',
                            password: 'nikhil',
                            bio: 'working and learning',
                            username: 'nik72619c'
                        });
                    user.blogs.push(blogInstance);
                    user.save(err=>{
                        console.log('err',err);
                        if(err){
                            res.json({
                                msg: 'some error occured while saving the user and his blogs !',
                                status: 500
                            })
                        }
                        else{
                            blogInstance.save(err=>{
                                if(err){
                                    res.json({
                                        err,
                                        status: 500
                                    })
                                } else{

                                    res.json({
                                        msg: 'user and his blogs saved successfully !',
                                        user: user,
                                        status: 200
                                    });
                                }
                            })

                        }
                    })
                    }
            })
        } catch(e){
               console.log('catch error', e); 
        }
    },
    updateBlog: async ()=>{
    //TODO function for updating the existing blog
    },
    getBlogs: (req, res)=>{
        //TODO function for getting all the blogs for the user to view and read
        User.findOne({email: 'nikhil@gmail.com'}).populate('blogs').exec((err, data)=>{
            if(err){
                res.json({
                    err
                });
            }
            else{
                res.json({
                    data
                })
            }
        })
    }
};

module.exports=blogOperations;