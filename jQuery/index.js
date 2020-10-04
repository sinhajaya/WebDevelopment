//One way 
$("button").click(function(){
    $("h1").css("color","purple");
})

$("input").keydown(function(event){
   $("h1").text(event.key);
})

//Another way
$("h1").on("mouseover",function(){
    $("h1").css("color","red");
});