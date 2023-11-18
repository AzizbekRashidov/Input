var elform = document.querySelector(".form");
var elinput = document.querySelector(".input");
var elselect = document.querySelector(".select");
var elheading = document.querySelector(".heading");

var USD_TO_UZB = 1230;
var RUBL_TO_UZB = 138;
var EURO_TO_UZB = 13344;

elform.addEventListener('submit' , function(evt){
    evt.preventDefault()

    var input = elinput.value.trim()
    var select = elselect.value.trim()

    if(isNaN(input) || input <= 0) {
        elheading.textContent = "Raqam yozing!!!"

    return
    }

    var javob = 0;

    if (select === "rubl") {
        javob = input / RUBL_TO_UZB
    }

    else if (select === "usd"){
        javob = input / USD_TO_UZB
    }

    else if(select === "euro"){
        javob = input / EURO_TO_UZB
    }

    elheading.textContent = javob;
})