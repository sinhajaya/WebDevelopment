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

//Adds the element before the element selected
$("h1").before("<button class=\"btn\">Before</button>");

//Adds the element after the element selected
$("h1").after("<button class=\"btn\">After</button>");

//Adds the element before the content of the element selected
$("h1").append("<button class=\"btn\">Append</button>");

//Adds the element after the content of the element selected
$("h1").prepend("<button class=\"btn\">Prepend</button>");

//Removes all the element selected
$(".btn").remove();

//Adds animation to the elements
$("button").click(function(){
    //$("h1").hide() hides the element
    //$("h1").show() shows the element

    //$("h1").toggle();

    //$("h1").animate({opacity:0.5}); //can only animate the styles which have numeric values

    $("h1").slideUp().slideDown().animate({opacity:0.5});
})