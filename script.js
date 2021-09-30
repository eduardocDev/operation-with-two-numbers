document.getElementById("add").onclick = function(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let theResult = parseInt(number1) + parseInt(number2)
    alert("you result is here: " + theResult)
}
document.getElementById("subtract").onclick = function(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let theResult = parseInt(number1) - parseInt(number2)
    alert("you result is here: " + theResult)
}
document.getElementById("multiply").onclick = function(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let theResult = parseInt(number1) * parseInt(number2)
    alert("you result is here: " + theResult)
}
document.getElementById("divide").onclick = function(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let theResult = parseInt(number1) / parseInt(number2)
    alert("you result is here: " + theResult)
}
