// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-tooltip="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var footerLinks = document.querySelectorAll("#footerLinks>div>div>ul>li>a")
    .forEach(element => {
        element.classList.add("text-decoration-none")
    })

var countriesMap = new Map()
countriesMap.set('gb', 'English (UK)')
countriesMap.set('us', 'English (US)')
countriesMap.set('de', 'Deutsch')
countriesMap.set('nl', 'Nederlands')
countriesMap.set('fr', 'Français')
countriesMap.set('es', 'Español')
countriesMap.set('ar', 'Español (AR)')
countriesMap.set('mx', 'Español (MX)')
countriesMap.set('es-ct', 'Català')
countriesMap.set('it', 'Italiano')
countriesMap.set('pt', 'Português (PT)')
countriesMap.set('br', 'Português (BR)')
countriesMap.set('no', 'Norsk')
countriesMap.set('fi', 'Suomi')
countriesMap.set('se', 'Svenska')
countriesMap.set('dk', 'Dansk')

var languagesModal = document.getElementById("languageModal")

for (var country of countriesMap) {
    var buttonItem = document.createElement("div")
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