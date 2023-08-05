var ImgBox = document.querySelector(".imgBox");
var ImgWrap = document.querySelector(".imgWrap");
var OrgImg = document.getElementById("orgImg");
var line = document.getElementById("line");
var leftSpace = ImgBox.offsetLeft;

OrgImg.style.width = ImgBox.offsetWidth + "px";

ImgBox.onmousemove = function(e){
    var boxWidth = (e.pageX - leftSpace) + "px";
    ImgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
}

