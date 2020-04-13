//back end


//front end
$(document).ready(function(){
    $("form#project").submit(function(event){
        event.preventDefault();

        var userInput = parseInt($("input#userInput").val());
        var result = beepBoop(userInput);

        
    })
})