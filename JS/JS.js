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


reveal.onclick = function () {
    mobileul.style.right = "0%"
    imgBackground.style.boxShadow = "0px 0px 0px 0px #e08437bf"
    reveal.style.display = "none"
    revealtwo.style.display = "flex"
}
revealtwo.onclick = function () {
    mobileul.style.right = "100%"
    imgBackground.style.boxShadow = "0px 0px 30px 10px #e08437bf"
    revealtwo.style.display = "none"
    reveal.style.display = "flex"
}
header.onclick = function () {
    mobileul.style.right = "100%"
    imgBackground.style.boxShadow = "0px 0px 30px 10px #e08437bf"
    revealtwo.style.display = "none"
    reveal.style.display = "flex"
}

if (window.scrollX >= 900) {
    reveal.style.display = "none"
    revealtwo.style.display = "none"
}