const User= require('../db/schema/userSchema');
const Blog= require('../db/schema/blogSchema');

var blogOperations={
    createBlog: (blog, req, res)=>{
        //TODO function for creating and saving a new blog
        console.log('blog received', blog);
        console.log('session data received in creation', req.session);
        //imitating fake data for now, to be updated

        try{
            var blogInstance=new Blog({
                blogContent: [blog]
            });
            User.findOne({uid: req.session.passport.user}, (err, content)=>{
                console.log('content first', content);
                    if(err){
                        res.status(500).json({err});
                    }

                    else if(content && content.uid){
                        //user found in the DB
                        console.log('content found', content);
                        content.blogs.push(blogInstance);
                        content.save();
                        blogInstance.save(err=>{
                            if(err){
                                res.json({
                                    err,
                                    status: 500
                                })
                            } else{

                                res.json({
                                    msg: 'blog saved successfully !',
                                    content: content,
                                    status: 200
                                });
                            }
                        })

                    }
                    else{
                            res.json({
                                message: 'could not find the user...need to redirect',
                                status: 404
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
        console.log('session data received', req.session);
        //TODO function for getting all the blogs for the user to view and read
        User.findOne({uid: req.session.passport.user}).populate('blogs').exec((err, data)=>{
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