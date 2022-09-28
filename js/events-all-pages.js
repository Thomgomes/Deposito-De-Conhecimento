//menu hamburguer e função para mudar tema no menu hamburguer
let hamburguer = document.querySelector(".hamburguer");
const themeColorBtn2 = document.getElementById('checktheme-menu-hamburguer');

hamburguer.addEventListener("click", function () {
    
    document.querySelector(".navbar").classList.toggle("show-menu");
});

themeColorBtn2.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})

//alterar tema
const $html = document.querySelector('html');
const themeColor = document.getElementById('checktheme');

themeColor.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
})