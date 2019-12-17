goToHome(makeDinner);
goToHome(textMe);
function makeDinner(){
    console.log("Dinner is ready");
}
function textMe(){
    console.log("SMS sent to mrs.node");
}
function goToHome(doNext){
    doNext();
}

