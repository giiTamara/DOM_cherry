const rodri_circulo = document.getElementById('circulo')
let tamanho_rodri = 10

rodri_circulo.addEventListener('dblclick',()=>{

    rodri_circulo.style.borderRadius = `${tamanho_rodri}px`;

}
)