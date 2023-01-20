var DateOfBirthId = document.querySelector("#input-birthday");
var LuckyNumberId = document.querySelector("#input-get-number");
var btnCheckId = document.querySelector("#btn-check-lucky");
var output = document.querySelector("#p-lucky-or-not");

btnCheckId.addEventListener("click",handleClick)
function handleClick() {
    var year = parseInt(DateOfBirthId.value.slice(0,4));
    var month = parseInt(DateOfBirthId.value.slice(5,7));
    var day = parseInt(DateOfBirthId.value.slice(8,10));
    var lucky = parseInt(LuckyNumberId.value);

    if(DateOfBirthId.value.trim().length == 0 && LuckyNumberId.value.trim().length == 0) {
        output.innerText = "how can you be lucky without entering Date of Birth and Lucky number?"
    }
    else if(DateOfBirthId.value.trim().length == 0) {
        output.innerText = "how can you be lucky without entering Date of Birth? "
    }
    else if( LuckyNumberId.value.trim().length == 0) {
        output.innerText = "how can you be lucky without entering Date of Birth and Lucky number?"
    }
    else if((day+month+year)%lucky == 0 && lucky > 1){
        output.innerText = "woah! It's a lucky number";
    }else {
        output.innerText = lucky+" is not a lucky number";
    }
}