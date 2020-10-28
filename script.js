var css = document.getElementsByTagName("h3")[0];
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementsByTagName("body")[0];

color1.addEventListener("input",function(){
   changeBody();





})

color2.addEventListener("input",function color1Listen(){
   changeBody();

})

function changeBody(){
    css.innerHTML = '';
    body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
    var textNode = document.createTextNode("linear-gradient(to right,"+color1.value+","+color2.value+")");
    css.appendChild(textNode);
}








