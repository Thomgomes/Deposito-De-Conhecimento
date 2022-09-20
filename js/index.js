const internalLink = document.querySelector('[data-scroll="suave"] a[href^="#"]')

const cardJs = document.getElementById('card-js');
const cardHtml = document.getElementById('card-html');
const cardCss = document.getElementById('card-css');
const cardGit = document.getElementById('card-git');
const cardGitHub = document.getElementById('card-github');

const contentSection = document.querySelector(".content-section")

//Função para mover até o href #
function SoftScroll(event) {
    event.preventDefault()

    const href = event.currentTarget.getAttribute('href')

    const locateHref = document.querySelector(href)

    locateHref.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

internalLink.addEventListener('click', SoftScroll)

//Funções para abrir o content section
cardJs.addEventListener("click", function () {
    SoftScroll(event)
    contentSection.innerHTML = `<h2>JavaScript</h2>`
})
cardHtml.addEventListener("click", function () {
    SoftScroll(event)
    contentSection.innerHTML = `<h2>Html</h2>`
})
cardCss.addEventListener("click", function () {
    SoftScroll(event)
    contentSection.innerHTML = `<h2>Css</h2>`
})
cardGit.addEventListener("click", function () {
    SoftScroll(event)
    contentSection.innerHTML = `<h2>Git</h2>`
})
cardGitHub.addEventListener("click", function () {
    SoftScroll(event)
    contentSection.innerHTML = `<h2>GitHub</h2>`
})