// Enable Bootstrap tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

var footerLinks = document.querySelectorAll("#footerLinks>div>div>ul>li>a")
    .forEach(element => {
        element.classList.add("text-decoration-none")
    })

    