// //this function clear all the value
// function clearScreen(){
//     document.getElementById("result").value="";
// }

// //this function evaluates the expressions

// function display(value){
//     document.getElementById("result").value += value;
// }

// //this function evaluates the expression 

// function calculate(){
//     var p = document.getElementById("result").value;
    
//     var q = eval(p);

//     document.getElementById("result").value = q;
// }
function clearscreen()
{
    document.getElementById("result").value="";
}

function display(value)
{
    document.getElementById("result").value += value;
}
function calculate()
{
    var p=document.getElementById("result").value;
    var q=eval(p);
    document.getElementById("result").value = q;
}