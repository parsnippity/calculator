"use strict";
let operator = "";

function add(){
    operator = "+";
    document.getElementById("holder").innerHTML = "+";
	document.getElementById("note").innerHTML = "";
}

function subtract(){
    operator = "-";
    document.getElementById("holder").innerHTML = "-";
	document.getElementById("note").innerHTML = "";
}

function multiply(){
    operator = "*";
    document.getElementById("holder").innerHTML = "*";
	document.getElementById("note").innerHTML = "";
}

function divide(){
    operator = "/";
    document.getElementById("holder").innerHTML = "/";
	document.getElementById("note").innerHTML = "";
}

function equals(){
    if(operator != ""){
        switch (operator){
            case "+":
                document.getElementById("result").innerHTML = Number(document.getElementById("firstNum").value) + Number(document.getElementById("secondNum").value);
                break;
            case "-":
                document.getElementById("result").innerHTML = Number(document.getElementById("firstNum").value) - Number(document.getElementById("secondNum").value);
                break;
            case "*":
                document.getElementById("result").innerHTML = Number(document.getElementById("firstNum").value) * Number(document.getElementById("secondNum").value);
                break;
            case "/":
                document.getElementById("result").innerHTML = Number(document.getElementById("firstNum").value) / Number(document.getElementById("secondNum").value);
                break;
            default:
                break;
        }
        document.getElementById("equation").innerHTML = `${document.getElementById("firstNum").value} ${operator} ${document.getElementById("secondNum").value}`;
        document.getElementById("firstNum").value = "";
        document.getElementById("secondNum").value = "";
        operator = "";
        document.getElementById("holder").innerHTML = "";
    } else {
        document.getElementById("note").innerHTML = "You need to pick an operator!";
        document.getElementById("note").style.color = "red";
    }
}