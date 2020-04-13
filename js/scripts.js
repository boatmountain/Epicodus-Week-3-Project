//back end
function beepBoop(userInput){
    var beepBoopArray = [];

    for(var i=0; i<= userInput; i++){
        if(i.toString().includes("3")){
            beepBoopArray.push("Won't you be my neighbor?");
        }  else if(i.toString().includes("2")){
            beepBoopArray.push("Boop!");
        }  else if(i.toString().includes("1")) {
            beepBoopArray.push("Beep!");
        }  else{
            beepBoopArray,push(" " + i);
        }
    }
    console.log(userInput);
    return beepBoopArray;
};


//front end
$(document).ready(function(){
    $("form#project").submit(function(event){
        event.preventDefault();

        var userInput = parseInt($("input#userInput").val());
        var result = beepBoop(userInput);

        
    })
})