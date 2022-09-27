//Função com data para scroll suave
let internalLink = document.querySelector('[data-scroll="suave"] a[href^="#"]')


//Seleção para cards
const cardJs = document.getElementById('card-js');
const cardHtml = document.getElementById('card-html');
const cardCss = document.getElementById('card-css');
const cardGit = document.getElementById('card-git');
const cardGitHub = document.getElementById('card-github');


//Selecionar a seção onde ficara o conteudo do card selecionado
let sectionContent = document.querySelector('.section-content')


// //Botão para função de copiar texto
// const codeSpaceContent = document.querySelector('.code-space').textContent
// const copyButton = document.getElementById('copy-button')
// const spanCopy = document.querySelector('.span-copy-btn')


// //adicionando função para btn copiar
// copyButton.addEventListener('click', function () {

//     //incluindo as classes no botão de copiar
//     copyButton.classList.add('copied')
//     spanCopy.classList.add('show-span')

//     //função para copiar o conteúdo
//     navigator.clipboard.writeText(codeSpaceContent)
//     console.log(codeSpaceContent + ' copiado')


//     //Tempo para função desativar as classes
//     setTimeout(disableCopyButton, 1500)

//     function disableCopyButton() {
//         copyButton.classList.remove('copied')
//         spanCopy.classList.remove('show-span')
//     }
// })


//Função para mover até o href #
function SoftScroll(event, distance = 'start') {
    event.preventDefault()

    const href = event.currentTarget.getAttribute('href')

    const locateHref = document.querySelector(href)

    locateHref.scrollIntoView({
        behavior: 'smooth',
        block: distance,
    })
}

internalLink.addEventListener('click', SoftScroll)

function addChecked(card) {
    switch (card) {
        case cardJs:
            if (cardJs.classList.contains("checked")) {
                cardHtml.classList.remove("checked")
                cardCss.classList.remove("checked")
                cardGit.classList.remove("checked")
                cardGitHub.classList.remove("checked")
            } else {
                cardJs.classList.add("checked")
            }
            break
        case cardHtml:
            if (cardHtml.classList.contains("checked")) {
                cardJs.classList.remove("checked")
                cardCss.classList.remove("checked")
                cardGit.classList.remove("checked")
                cardGitHub.classList.remove("checked")
            } else {
                cardHtml.classList.add("checked")
            }
            break
        case cardCss:
            if (cardCss.classList.contains("checked")) {
                cardJs.classList.remove("checked")
                cardHtml.classList.remove("checked")
                cardGit.classList.remove("checked")
                cardGitHub.classList.remove("checked")
            } else {
                cardCss.classList.add("checked")
            }
            break
        case cardGit:
            if (cardGit.classList.contains("checked")) {
                cardJs.classList.remove("checked")
                cardHtml.classList.remove("checked")
                cardCss.classList.remove("checked")
                cardGitHub.classList.remove("checked")
            } else {
                cardGit.classList.add("checked")
            }
            break
        case cardGitHub:
            if (cardGitHub.classList.contains("checked")) {
                cardJs.classList.remove("checked")
                cardHtml.classList.remove("checked")
                cardGit.classList.remove("checked")
                cardCss.classList.remove("checked")
            } else {
                cardGitHub.classList.add("checked")
            }
            break
        default:
            console.error("Invalid Option!")
    }
}

//Funções para abrir o content section
cardJs.addEventListener("click", function () {
    SoftScroll(event)

    //Função para adicionar o checked no elemento marcado
    cardJs.classList.add("checked")
    addChecked(cardJs)

    sectionContent.innerHTML = `<h2>JavaScript</h2>`
})
cardHtml.addEventListener("click", function () {
    SoftScroll(event)

    //Função para adicionar o checked no elemento marcado
    cardHtml.classList.add("checked")
    addChecked(cardHtml)

    sectionContent.innerHTML =
        `
        <section class="section-content" id="section-content">
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
            <h4 class="information-itens" id="what-is">Então, oque seria HTML?</h4>
            <p>
                HTML não é uma linguagem de programação; é uma linguagem de marcação, usada para definir a estrutura
                do seu conteúdo. HTML consiste de uma série de elementos, que você usa para delimitar ou agrupar
                diferentes partes do conteúdo para que ele apareça ou atue de determinada maneira. As tags anexas
                podem transformar uma palavra ou imagem num hiperlink, pode colocar palavras em itálico, pode
                aumentar ou diminuir a fonte e assim por diante.
            </p>
            <h4 class="information-itens" id="elements">Elementos</h4>
            <p>
                Então oque seria um elemento?<br>
                Um elemento é parte de uma página web. Em HTML, um elemento pode conter um item de dados, ou
                um bloco de texto, ou uma imagem, ou talvez nada. Um elemento típico inclui uma tag de abertura com
                alguns atributos, o conteúdo de texto incluído e uma tag de fechamento.
            </p>

            <h4 class="information-itens" id="tags">Tags</h4>
            <p>
                Então oque seria uma tag?<br>
                Em HTML a tag é usada para criar um elemento. O nome de um elemento HTML é o nome usado entre
                colchetes angulares como "<span id="token-tag1">...</span>" para criar parágrafos. Note que ao
                fechar uma tag ela tem uma barra antes de seu nome, "<span id="token-tag2">...</span>" , e
                que em elementos vazios a tag final não é requirida e nem permitida. Se os atributos não forem
                mencionados, os valores padrões serão usados em cada caso.
            </p>
            <h4 class="information-itens" id="elements-tags">Elementos e Tags são a mesma coisa?</h4>
            <p>
                Não, elas não são a mesma coisa.<br>
                As tags começam ou terminam um elemento no código fonte, enquanto os elementos são parte do
                <strong>DOM</strong>, o modelo do documento para exibir a página no navegador.<br>
                De uma forma bem pratica vou mostrar como são representados os elementos e as tags em HTML:
            </p>
            <div class="code-example">
                <p class="pre">
                    <code
                        class="code-space"><span id="token-tag3">...</span>Minha gatinha é uma fofura!<span id="token-tag4">...</span></code>
                </p>
                <div class="copy-btn">
                    <button id="copy-button" class="mdi mdi-content-copy"></button>
                    <span class="span-copy-btn">copiado</span>
                </div>
            </div>
            <div class="element-example">
                ^ ^ ^
                <p class="element-text">tudo aquilo que está dentro da área cinza é o elemento.</p>
                <p class="element-text" id="element-text">E a tag é o <strong>"p"</strong> que abre "<>" e fecha com
                        a <<span class=none-span></span>/ > no final.</p>
            </div>
            <h4 class=" information-itens" id="dom">DOM</h4>
            <h5>Document Object Model</h5>
            <h5>(Modelo de Objeto de Documentos)</h5>
            <p>
                É uma <strong>API</strong> definida pelo <strong><a href="https://www.w3c.br/"
                        target="_blank">W3C</a></strong> para representar e interagir com qualquer
                documento HTML.
            </p>
            <p>
                O DOM é uma das <strong>APIs</strong> mais usadas na <strong>Web</strong> porque ele
                permite que cada código rodando no
                navegador acesse e interaja com cada nó do documento. Os nós podem ser criados, movidos
                ou
                modificados. Listeners de evento podem também ser adicionados aos nós para serem
                disparados quando
                um dado evento ocorrer.<br>Você pode ver mais sobre <strong>DOM</strong> e
                <strong>APIs</strong> no card de
                <a onclick="SoftScroll(event)" href="#cards-section" id="js-link">JavaScript</a>
            </p>

        </div>
        <div class="aside-content">
            <aside class="aside-section">
                <h6>Neste artigo</h6>
                <nav class="link-navigation">
                    <button onclick="SoftScroll(event, 'center')" href="#what-is" class="aside-options hover-effect"
                        id="what-is-option">Então, oque seria HTML?</button>
                    <button onclick="SoftScroll(event, 'center')" href="#elements"
                        class="aside-options hover-effect" id="element-option">Elementos</button>
                    <button onclick="SoftScroll(event, 'center')" href="#tags" class="aside-options hover-effect"
                        id="tag-option">Tags</button>
                    <button onclick="SoftScroll(event, 'center')" href="#elements-tags"
                        class="aside-options hover-effect" id="element-tag-option">Elementos e Tags são a mesma
                        coisa?</button>
                    <button onclick="SoftScroll(event, 'center')" href="#dom" class="aside-options hover-effect"
                        id="dom-option">DOM</button>
                </nav>
            </aside>
        </div>
    </div>

</section>
`
    const tokenP = document.getElementById("token-tag1"); tokenP.innerText = '<' + 'p>';
    const tokenP2 = document.getElementById("token-tag2"); tokenP2.innerText = '</' + 'p>';
    const tokenP3 = document.getElementById("token-tag3"); tokenP3.innerText = '<' + 'p>';
    const tokenP4 = document.getElementById("token-tag4"); tokenP4.innerText = '</' + 'p>';

    //Botão para função de copiar texto
const codeSpaceContent = document.querySelector('.code-space').textContent
const copyButton = document.getElementById('copy-button')
const spanCopy = document.querySelector('.span-copy-btn')


//adicionando função para btn copiar
copyButton.addEventListener('click', function () {

    //incluindo as classes no botão de copiar
    copyButton.classList.add('copied')
    spanCopy.classList.add('show-span')

    //função para copiar o conteúdo
    navigator.clipboard.writeText(codeSpaceContent)
    console.log(codeSpaceContent + ' copiado')


    //Tempo para função desativar as classes
    setTimeout(disableCopyButton, 1500)

    function disableCopyButton() {
        copyButton.classList.remove('copied')
        spanCopy.classList.remove('show-span')
    }
})
})
cardCss.addEventListener("click", function () {
    SoftScroll(event)

    //Função para adicionar o checked no elemento marcado
    cardCss.classList.add("checked")
    addChecked(cardCss)

    sectionContent.innerHTML = `<h2>Css</h2>`
})
cardGit.addEventListener("click", function () {
    SoftScroll(event)

    //Função para adicionar o checked no elemento marcado
    cardGit.classList.add("checked")
    addChecked(cardGit)

    sectionContent.innerHTML = `<h2>Git</h2>`
})
cardGitHub.addEventListener("click", function () {
    SoftScroll(event)

    //Função para adicionar o checked no elemento marcado
    cardGitHub.classList.add("checked")
    addChecked(cardGitHub)

    sectionContent.innerHTML = `<h2>GitHub</h2>`
})