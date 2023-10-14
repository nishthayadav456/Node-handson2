const blogRouter=require("express").Router()
blogRouter.post("/bollywood",(req,res)=>{
res.send({
    
    "id": 1,
    "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.",
    "Features of Express JS": "Middleware- Middleware is a request handler that has access to the application's request-response cycle. Routing- It refers to how an application's endpoint's URLs respond to client requests.Templating - It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server. Debugging -Express makes it easier as it identifies the exact part where bugs are. ",
    "Limitations of Express JS":"Sometimes, there is no structural way to organize things, and the code becomes non-understandable.There are so many issues with callbacks. The error messages that will come are challenging to understand."
    });
})
blogRouter.post("/hollywood",(req,res)=>{
    res.send({
    
        "id": 1,
        "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.",
        "Features of Express JS": "Middleware- Middleware is a request handler that has access to the application's request-response cycle. Routing- It refers to how an application's endpoint's URLs respond to client requests.Templating - It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server. Debugging -Express makes it easier as it identifies the exact part where bugs are. ",
        "Limitations of Express JS":"Sometimes, there is no structural way to organize things, and the code becomes non-understandable.There are so many issues with callbacks. The error messages that will come are challenging to understand."
        });
    })
 blogRouter.post("/fitness",(req,res)=>{
    res.send("This is a fitness page")
 })
blogRouter.get("/food",(req,res)=>{
    res.send({
    
        "id": 1,
        "what is express?": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application.It's a layer built on the top of the Node js that helps manage servers and routes.",
        "Features of Express JS": "Middleware- Middleware is a request handler that has access to the application's request-response cycle. Routing- It refers to how an application's endpoint's URLs respond to client requests.Templating - It provides templating engines to build dynamic content on the web pages by creating HTML templates on the server. Debugging -Express makes it easier as it identifies the exact part where bugs are. ",
        "Limitations of Express JS":"Sometimes, there is no structural way to organize things, and the code becomes non-understandable.There are so many issues with callbacks. The error messages that will come are challenging to understand."
        });
 })

module.exports=blogRouter