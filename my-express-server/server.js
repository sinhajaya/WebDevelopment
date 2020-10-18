//jshint e5version:6

const express= require("express");

const app = express();

app.get("/", function(request,response){
    console.log(request);
    response.send("Hello");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});