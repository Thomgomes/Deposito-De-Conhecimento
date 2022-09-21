let internalLink = document.querySelector('[data-scroll="suave"] a[href^="#"]')

const cardJs = document.getElementById('card-js');
const cardHtml = document.getElementById('card-html');
const cardCss = document.getElementById('card-css');
const cardGit = document.getElementById('card-git');
const cardGitHub = document.getElementById('card-github');

let sectionContent = document.querySelector(".section-content")




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
    sectionContent.innerHTML = `<h2>JavaScript</h2>`
})
cardHtml.addEventListener("click", function () {
    SoftScroll(event)

    sectionContent.innerHTML = `
    <div class="title-subtitle">
    <h2>Html</h2>
    <h3 translate="no">HyperText Markup Language</h3>
    <h3>(Linguagem de Marcação de HiperTexto)</h3>
    </div>
    <div class="basic-information">
        <p>HTML é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.
            Sendo
            assim ele é o código que você usa para estruturar uma página web e seu conteúdo. Por exemplo, o conteúdo
            pode ser estruturado em parágrafos, em uma lista com marcadores ou usando imagens e tabelas. Outras
            tecnologias além do HTML geralmente são usadas para descrever a aparência <a onclick="SoftScroll(event)"
                href="#cards-section">(CSS)</a> ou a
               funcionalidade e comportamento <a onclick="SoftScroll(event)" href="#cards-section"
                   id="js-link">(JavaScript)</a> de uma página da web.
        </p>
        <p><strong>"HiperTexto"</strong> refere-se aos links que conectam páginas da Web entre si, seja dentro de um
            único site ou entre
            sites. Links são um aspecto fundamental da web.
        </p>
        <p>
            O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web.
            A marcação HTML inclui "elementos" especiais, Um elemento HTML é separado de outro texto em um documento
            por
            "tags", que consistem no nome do elemento entre "<" e ">" . O nome de um elemento dentro de uma tag é
                insensível a maiúsculas e minúsculas. Isto é, pode ser escrito em maiúsculas, minúsculas ou um
                mistura. Por exemplo, a tag < title> pode ser escrita como < Title>, < TITLE> ou de qualquer outra
                        forma.<br>
                        (no código em si, não tem espaço entre os "<>" e o nome de um elemento dentro da tag!)
        </p>
    </div>
    <div class="information">
        <div class="information-content">
            <h3 class="what-is">Então, oque seria HTML?</h3>
            <p>
                HTML não é uma linguagem de programação; é uma linguagem de marcação, usada para definir a estrutura
                do seu conteúdo. HTML consiste de uma série de elementos, que você usa para delimitar ou agrupar
                diferentes partes do conteúdo para que ele apareça ou atue de determinada maneira. As tags anexas
                podem transformar uma palavra ou imagem num hiperlink, pode colocar palavras em itálico, pode
                aumentar ou diminuir a fonte e assim por diante. Por exemplo, veja a seguinte linha de conteúdo:
            </p>
            <pre class="code-space">Minha gatinha é uma fofura!</pre>
            <p>
                Se quiséssemos que a linha permanecesse por si só, poderíamos especificar que é um parágrafo
                colocando-a em uma tag de parágrafo:
            </p>
            <div class="code-example">
                <pre class="pre code-space">
                    <code>
                        <span id="token-tag1">...</span>Minha gatinha é uma fofura!<span id="token-tag2">...</span>
                    </code>
                </pre>
                <button class="mdi mdi-content-copy"></button>
                <span></span>
            </div>
        </div>
        <div class="aside-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum deserunt nobis atque tempore! Maxime
            distinctio ratione ver
        </div>
    </div>
`
    const tokenP = document.getElementById("token-tag1")
    const tokenP2 = document.getElementById("token-tag2")
    tokenP.innerText = '<' + 'p>'
    tokenP2.innerText = '</' + 'p>'
})
cardCss.addEventListener("click", function () {
    SoftScroll(event)
    sectionContent.innerHTML = `<h2>Css</h2>`
})
cardGit.addEventListener("click", function () {
    SoftScroll(event)
    sectionContent.innerHTML = `<h2>Git</h2>`
})
cardGitHub.addEventListener("click", function () {
    SoftScroll(event)
    sectionContent.innerHTML = `<h2>GitHub</h2>`
})