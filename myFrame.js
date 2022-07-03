var mq = window.matchMedia( "(max-width: 992px)" );
if (mq.matches) {
    document.getElementById("myFrame").width = "auto";
}

var mqTwo = window.matchMedia("(min-width:994px)");

if(mqTwo.matches){
    document.getElementById("myFrame").width="100%";
}
