

var oneWay = document.getElementById("onewayRadio")
var radioChange = document.getElementById("returnRadio")
var display = document.getElementById("displayGrop-off")
radioChange.addEventListener("change", function () {
    display.hidden = false
})

oneWay.addEventListener("change", function () {
    display.hidden = true
})

var ageInfo = document.getElementById("ageInfo")
var unCheked = document.getElementById("ageCheck")
function ageCheck() {

    ageInfo.toggleAttribute("hidden");

    unCheked.toggleAttribute("checked")
}
////////////////

var color1 = document.getElementById("colorChange")
function colorChange(ele) {
    ele.style.color = 'red';
}

var ColorChange = document.getElementById("colorChange");
function colorChange(ele) {
    ele.style.color = "#ee7a1a";
}
function colorBack(ele) {
    ele.style.color = "black";
}

var backGround = document.getElementById("backgroundColor").style.backgroundColor = "#ece2e2";


////page2
var inputval = document.getElementById("inputValue")
inputval.value = "London";

//footer
var footerLinks = document.querySelectorAll("#footerLinks>div>div>ul>li>a")
    .forEach(element => {
        element.classList.add("text-decoration-none")
    })