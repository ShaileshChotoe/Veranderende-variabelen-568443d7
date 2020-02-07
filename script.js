var input = document.querySelector("input");
var message = document.querySelector("h3");

function berekenOmtrek()
{
    const pi = 3.14;
    return input.value * pi;
}

function showMessage()
{
    message.innerText = "De omtrek van de circel is: " + berekenOmtrek();
}