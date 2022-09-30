//alterar tema
const $html = document.querySelector('html')
const themeColor = document.getElementById('checktheme')

themeColor.addEventListener('change', function () {
    $html.classList.toggle('dark-mode')
})


themeColor.checked ? $html.classList.add('dark-mode') : $html.classList.remove('dark-mode')
// if(themeColor.checked){
//     $html.classList.add('dark-mode')
// }else{}


//menu hamburguer e função para mudar tema no menu hamburguer
let hamburguer = document.querySelector(".hamburguer")
const themeColorOption = document.getElementById('option-theme')
const themeIcon = document.getElementById('option-theme-icon')

hamburguer.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show-menu")
});

themeColorOption.addEventListener('click', function () {
    $html.classList.toggle('dark-mode')

    if (themeColor.checked) {
        themeColor.checked = false
        themeColorOption.innerText = "LightMode:On"
        themeIcon.classList.remove("fa-moon"); themeIcon.classList.add("fa-sun")
    } else {
        themeColor.checked = true
        themeColorOption.innerText = "DarkMode:On"
        themeIcon.classList.add("fa-moon"); themeIcon.classList.remove("fa-sun")
    }
})