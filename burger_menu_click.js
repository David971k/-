let element = document.getElementsByClassName("osnova");
function burger_click(){
element[0].style.display = "flex";
document.querySelector(".overlay").style.display = 'block';
}
function closeOver(){
    document.getElementById("overlay").style.display = 'none';
    element[0].style.display = "none";
}