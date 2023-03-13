let logo = document.querySelector(".logo")
let imgBackground = document.querySelector(".img-background")
let spant1 = document.querySelector (".ul-revealtwo .span-1")
let spant2 = document.querySelector (".ul-revealtwo .span-2")
let spant3 = document.querySelector (".ul-revealtwo .span-3")
let span1 = document.querySelector (".ul-reveal .span-1")
let span2 = document.querySelector (".ul-reveal .span-2")
let span3 = document.querySelector (".ul-reveal .span-3")
let reveal = document.querySelector (".ul-reveal")
let revealtwo = document.querySelector (".ul-revealtwo")
let header = document.querySelector (".mobile-list")
let mobileul = document.querySelector (".mobile-ul")


logo.onmouseenter = function () {
    imgBackground.style.boxShadow = "0px 0px 40px 20px #e08437bf"
}
logo.onmouseleave = function () {
    imgBackground.style.boxShadow = "0px 0px 30px 10px #e08437bf"
}

let toogleMenu = 1;

function toogleStatue()  {
if (toogleMenu == 1) {
    mobileul.style.right = "0%"
    imgBackground.style.boxShadow = "0px 0px 0px 0px #e08437bf"
    toogleMenu = 0
    span1.style.top = "5px"
    span1.style.transform = "rotate(45deg)"
    span2.style.width = "0%"
    span3.style.bottom = "5px"
    span3.style.transform = "rotate(-45deg)"
    document.body.style.overflow = "hidden"
} else if (toogleMenu == 0) {
    mobileul.style.right = "100%"
    imgBackground.style.boxShadow = "0px 0px 30px 10px #e08437bf"
    toogleMenu = 1
    span1.style.top = "0px"
    span1.style.transform = "rotate(0deg)"
    span2.style.width = "100%"
    span3.style.bottom = "0px"
    span3.style.transform = "rotate(0deg)"
    document.body.style.overflow = "auto"
}
}
header.onclick = function () {
    mobileul.style.right = "100%"
    imgBackground.style.boxShadow = "0px 0px 30px 10px #e08437bf"
    revealtwo.style.display = "none"
    reveal.style.display = "flex"
    span1.style.top = "0px"
    span1.style.transform = "rotate(0deg)"
    span2.style.width = "100%"
    span3.style.bottom = "0px"
    span3.style.transform = "rotate(0deg)"
    document.body.style.overflow = "auto"
}

if (window.scrollX >= 900) {
    reveal.style.display = "none"
    revealtwo.style.display = "none"
}
