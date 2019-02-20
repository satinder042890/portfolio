function welcome(){
    $("#mainArea").empty();
    $("#mainArea").append("<h2 class='display-1 animated bounce'>WELCOME TO</h2>");
    $("#mainArea").append("<h2 class='display-1 animated bounce'>MY PAGe</h2>");
}

$(document).ready(function(){
    $(".slide").on("click",function()
    {
       $("ul").slideToggle("slow");
    });

        
});