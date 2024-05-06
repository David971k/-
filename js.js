window.addEventListener("resize", function() {
    let bodyWidth = document.body.clientWidth;
    let imageHeight = bodyWidth / 4;
    
    let imageElement = document.getElementById("parij");
    if(bodyWidth >= 768){
        imageElement.style.height = "auto";
    }else {imageElement.style.height = "114px";}

    if(imageHeight <= 114){
        imageElement.style.height = imageHeight + "px";
    }
});
