// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// Remove decoration(underline) from all anchor tags in footer
var footerLinks = document.querySelectorAll("#footerLinks>div>div>ul>li>a")
    .forEach(element => {
        element.classList.add("text-decoration-none")
    })

// Fill Languages Modal with data
var countriesMap = new Map()
    .set('gb', 'English (UK)')
    .set('us', 'English (US)')
    .set('de', 'Deutsch')
    .set('nl', 'Nederlands')
    .set('fr', 'Français')
    .set('es', 'Español')
    .set('ar', 'Español (AR)')
    .set('mx', 'Español (MX)')
    .set('es-ct', 'Català')
    .set('it', 'Italiano')
    .set('pt', 'Português (PT)')
    .set('br', 'Português (BR)')
    .set('no', 'Norsk')
    .set('fi', 'Suomi')
    .set('se', 'Svenska')
    .set('dk', 'Dansk')

var languagesModal = document.getElementById("languageModal")

for (var country of countriesMap) {
    var buttonItem = document.createElement("button")
    buttonItem.classList.add("btn", "btn-light", "text-start", "col-lg-3", "my-2")
    languagesModal.appendChild(buttonItem)

    var spanItem = document.createElement("span")
    buttonItem.appendChild(spanItem)

    var iconItem = document.createElement("i")
    iconItem.classList.add("fi", "fs-3", `fi-${country[0]}`)
    spanItem.appendChild(iconItem)

    var languageText = document.createTextNode(country[1])
    spanItem.appendChild(languageText)
}

// Fill currencies map with data
var currenciesMap = new Map()
    .set("€£$", "Property currency")
    .set("ARS", "Argentine peso")
    .set("AUD", "Australian dollar")
    .set("AZN", "Azerbaijan, New Manats")
    .set("BHD", "Bahrain dinar")
    .set("BRL", "Brazilian real")
    .set("BGN", "Bulgarian lev")
    .set("CAD", "Canadian dollar")
    .set("XOF", "CFA Franc BCEAO")
    .set("CLP", "Chilean peso")
    .set("CNY", "Chinese yuan")
    .set("COP", "Colombian peso")
    .set("CZK", "Czech koruna")
    .set("DKK", "Danish krone")
    .set("EGP", "Egyptian pound")
    .set("EUR", "Euro")
    .set("USD", "U.S. dollar")
    .set("AED", "U.A.E. dirham")
    .set("UAH", "Ukraine Hryvnia")

var currenciesModal = document.getElementById("currencyModal")

for (var currency of currenciesMap) {
    var buttonItem = document.createElement("button")
    buttonItem.classList.add("btn", "btn-light", "text-start", "col-lg-3", "my-2")
    currenciesModal.appendChild(buttonItem)

    var paragraphItem = document.createElement("p")
    paragraphItem.innerHTML = `${currency[1]}<br>${currency[0]}`
    buttonItem.appendChild(paragraphItem)
}

// Handle change events for Radio Buttons
document.getElementById("onewayRadio")
    .addEventListener("change", function (event) {
        document.querySelectorAll(".returnShow")
            .forEach(elem => {
                elem.toggleAttribute("hidden")
            })

        document.getElementsByClassName("returnHide")[0].classList.remove("opacity-0")
        document.getElementsByClassName("returnHide")[0].classList.remove("disabled")
    })

document.getElementById("returnRadio")
    .addEventListener("change", function (event) {
        document.querySelectorAll(".returnShow")
            .forEach(elem => {
                elem.toggleAttribute("hidden")
            })

        document.getElementsByClassName("returnHide")[0].classList.add("opacity-0")
        document.getElementsByClassName("returnHide")[0].classList.add("disabled")
    })

// Handle Form Submit
document.getElementById("onewayPickup")
    .addEventListener("blur", function (event) {
        document.getElementById("returnDestination").value = event.target.value
    })

document.getElementById("onewayDestination")
    .addEventListener("blur", function (event) {
        document.getElementById("returnPickup").value = event.target.value
    })

// Handle Car Categories
var passengers13 = document.querySelectorAll("#carsCategories>.col-lg-6")
var passengers47 = document.querySelectorAll("#carsCategories>.col-lg-4")

document.getElementById("btnradio1").addEventListener("change", function () {
    passengers13.forEach(elem => {
        elem.hidden = false;
    })

    passengers47.forEach(elem => {
        elem.hidden = true
    })
})

document.getElementById("btnradio2").addEventListener("change", function () {
    passengers13.forEach(elem => {
        elem.hidden = true
    })

    passengers47.forEach(elem => {
        elem.hidden = false;
    })
})

document.getElementById("btnradio3").addEventListener("change", function () {
    passengers13.forEach(elem => {
        elem.hidden = false
    })

    passengers47.forEach(elem => {
        elem.hidden = false
    })
})
