const rodri_circulo = document.getElementById('circulo')
let tamanho_rodri = 10

rodri_circulo.addEventListener('dblclick',()=>{
rodri_circulo.style.borderRadius = `${tamanho_rodri}px`;
rodri_circulo.style.width = `${tamanho_rodri}px`;
rodri_circulo.style.height = `${tamanho_rodri}px`;
tamanho_rodri = tamanho_rodri + 20

}
)

function mudaCor(novaCor) {
    var elemento = document.getElementById("para1");
    elemento.style.backgroundColor = novaCor;
    elemento.style.display = "inline";
};

const imagem = document.getElementById('foto')
let foto_t = false

imagem.addEventListener('click',()=>{
    if(foto_t === false){
imagem.src = 'pokedex.png';
foto_t = true
    }else{
        imagem.src = 'teste.jpg'
        foto_t = false;
    }
});

const rodri_circulov = document.getElementById('circulo')
let rodri_tamanho = 1

div.addEventListener('db1click', () => {
    alert(rodri_tamanho)
    rodri_circulo.style.borderRadius = `${rodri_tamanho} px`;
    rodri_circulo.style.width = `${rodri_tamanho*2}px`;
    rodri_circulo.style.height = `${rodri_tamanho*2}px`;
    rodri_tamanho += 30;

});

form.addEventListener("submit", (event)=>{
event.preventDefault();
input=form.querySelector('input')
if(parseInt(input.value)< 24 || isNaN(input.value)){
    var p = Selection.querySelector('p')
    p.innerText = "Professor é mais velho"
    p.style.display = 'block'

}else{
    var p = section.querySelector('p')
    p.innerHTML = '<h1> Olá Mundo </h1'
    p.style.display = 'block'
}

});