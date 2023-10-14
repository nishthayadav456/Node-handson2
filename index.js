//Express:
const express=require("express")
const app=express();
const blogRouter=require("./router/blogRouter")
app.use("/api/main",blogRouter) //middleware

app.get("/",(req,res)=>{
res.send("<h2>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.</h2>")

})
app.post("/post/DB",(req,res)=>{
    res.send('Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.Its a layer built on the top of the Node js that helps manage servers and routes.')
})
// app.delete()
// app.put()
app.listen(4002,()=>{
    try{
        console.log("server is running in port 4002")
    }
    catch(err){
        console.log("error")
    }
   
})