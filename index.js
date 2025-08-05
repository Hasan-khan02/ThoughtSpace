const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4:uuidv4 } = require ( 'uuid' );
const methodOverride = require('method-override')


// takay string format ke data ko express samajh sakay
app.use(express.urlencoded({extended:true}));

// edit ke liye patch request
app.use(methodOverride('_method'))

// views file mil sakay aur css file public folder main milsakay!
app.set("view engine","ejs");
app.set("views", path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));



let posts =[
    {
        id: uuidv4(),
        username : "Hassan Javed",
        content : "I love technology because it keeps evolving, making life easier and more exciting. From coding websites to exploring AI, every innovation inspires me to learn, build, and grow every day  "
    },
    {
        id: uuidv4(),
        username : "Asif",
        content : "Sleeping 😴 is very important for a healthy life. It helps the body recover, boosts the mind, improves focus, and keeps energy levels high. Good sleep means better health and mood"
    },
    {
        id: uuidv4(),
        username : "Ammar",
        content : "Hardwork 💪🏼 is important to achieve success !"

    },
    {
        id: uuidv4(),
        username : "Khuzaima",
        content : "AI improves MERN apps by adding smart search, chatbots, data analysis, user behavior tracking, recommendations, and intelligent automation features."

    }
 
]


// Home api
app.get("/posts",(req,res) => {
    res.render("index.ejs", { posts });
})

// new post api
app.get("/posts/new",(req,res) => {
    res.render("new.ejs");
})


// jab form submit ho wo tu yahan req bheje 
app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id , username , content});
    res.redirect("/posts");
})

// id ke through search in the database
app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id ===p.id);
    res.render("show.ejs",{ post });
})


// update route
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newContent = req.body.content;
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let { id } = req.params;
    let post = posts.find((p)=> id ===p.id);
    res.render("edit.ejs",{ post })
})

app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("listening on port 8080")
})