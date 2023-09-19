const express = require("express");
const mongoose = require("mongoose");
const Blog = require('./models/blogs');
const app = express();

const dbUri = "mongodb+srv://0249660998:0249660998@nodecluster.xxgk5ty.mongodb.net/"
mongoose.connect(dbUri)
    .then((result)=>{
        console.log("connected to db");
        app.listen(3100,()=>console.log("server started at port 3100"));
    })
    .catch((err)=>console.log(err));

//register view engine;
app.set('view engine','ejs');

//creating sandbox to test database

app.get('/add-blogs',(req,res)=>{
    const blog = new Blog({
        title:"drama",
        snippet: 'About the books i read',
        body: 'there books i have been reading can be called '+
        'dummy books with no title that is all i can do with my life'
    });
    blog.save()
        .then((result)=>res.send(result))
        .catch((err)=>res.send(err))
})

app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>res.send(result))
        .catch((err) =>res.send(err))
})
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render('index',{title:"home"});
});

app.get('/about',(req,res)=>{
    res.render('about',{title:"about"});
});

app.use((req,res)=>{
    res.status(404).render('404',{title:'404'});
})

