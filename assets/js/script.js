

document.addEventListener("DOMContentLoaded",function(){
    let userData = document.getElementById('userInputT');
    for (let ud of userData) {
        if (this.getAttribute("type") === "text"){
            saveHabit();
        } else {
            let dataType = this.getAttribute("type");
            goalCounter(dataType);
        
    }


})




function getInputFromTextBox() {
    let input = document.getElementById("userInputT").value[0];
    alert(input);
    let show= document.getElementById("userInputT")[0].innerHTML= input;
    return show;
}
