let clicks= 0;
function onTouch(){
    clicks += 1 ;
    document.getElementById("number").innerHTML = clicks;
}
function onReset(){
    clicks=0;
    document.getElementById("number").innerHTML=clicks;
}

