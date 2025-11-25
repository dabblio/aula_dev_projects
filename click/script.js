// --- DEFININDO AS CONSTANTES ---

const contadorElemento = document.getElementById('contador')
const btnDiminuir = document.getElementById('diminuir')
const btnResetar = document.getElementById('resetar')
const btnAumentar = document.getElementById('aumentar')

// -------------------------------

// --- DEFININDO AS VARIAVEIS ---
// PARA ARMAZENAR O VALOR DO CONTADOR
let contador = 0;

// --- DEFININDO AS FUNÇÕES ---
// PARA ATUALIZAR A COR BASEADA NO VALOR
function atualizarCor(){
    if(contador > 0){
        contadorElemento.className = 'positivo';
    }
    else if (contador < 0){
        contadorElemento.className = 'negativo';
    }
    else {
        contadorElemento.className = 'zero';
    }
}
// --- EVENTOS ---
// ADICIONAR EVENTO DE CLIQUE NO BTN AUMENTAR
btnAumentar.addEventListener('click', function(){
    contador++;
    contadorElemento.innerHTML = contador;
    atualizarCor();
})
// ADICIONAR EVENTO DE CLIQUE NO BTN DIMINUIR
btnDiminuir.addEventListener('click', function(){
    contador--;
    contadorElemento.innerHTML = contador;
    atualizarCor();
})
// ADICIONAR EVENTO DE CLIQUE NO BTN RESETAR
btnResetar.addEventListener('click', function(){
    contador = 0;
    contadorElemento.innerHTML = contador;
    atualizarCor();
})
// -------------------------------  