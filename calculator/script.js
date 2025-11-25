// ========================
// 🔹 VARIÁVEIS PRINCIPAIS
// ========================

// Guarda o número digitado atualmente
let valorAtual = '0';

// Guarda o número anterior à operação
let valorAnterior = '';

// Guarda o operador matemático (+, -, *, /)
let operador = null;


// ==========================
// 🔹 ELEMENTOS DO DISPLAY
// ==========================

// Seleciona o display onde mostra o número atual
const displayAtual = document.getElementById('current');

// Seleciona o display onde mostra o número anterior e o operador
const displayAnterior = document.getElementById('previous');


// ====================================
// 🔹 ATUALIZAR O QUE APARECE NO DISPLAY
// ====================================

const atualizarDisplay = () => {
  // Mostra o número atual no display principal
  displayAtual.textContent = valorAtual;

  // Mostra o número anterior + operador, se existir
  displayAnterior.textContent = valorAnterior + (operador ? `${operador}` : '');
};


// ====================================
// 🔹 ADICIONAR UM NÚMERO OU PONTO DECIMAL
// ====================================

const adicionarNumero = (num) => {
  // Impede digitar mais de um ponto decimal
  if (num === '.' && valorAtual.includes('.')) return;

  // Se o valor atual for '0', substitui; caso contrário, adiciona o novo número
  valorAtual = valorAtual === '0' ? num : valorAtual + num;

  // Atualiza o display após a digitação
  atualizarDisplay();
};


// ====================================
// 🔹 DEFINIR QUAL OPERAÇÃO SERÁ FEITA
// ====================================

const definirOperador = (op) => {
  // Se não há número atual, não faz nada
  if (valorAtual === '') return;

  // Se já existe um valor anterior, realiza o cálculo antes
  if (valorAnterior !== '') calcular();

  // Guarda o operador selecionado
  operador = op;

  // Move o valor atual para o valor anterior
  valorAnterior = valorAtual;

  // Limpa o valor atual para digitar o próximo número
  valorAtual = '';

  // Atualiza o display
  atualizarDisplay();
};


// ====================================
// 🔹 EXECUTAR O CÁLCULO MATEMÁTICO
// ====================================

const calcular = () => {
  // Se não houver operador ou número atual, sai da função
  if (!operador || valorAtual === '') return;

  // Converte os valores de string para número decimal
  const anterior = parseFloat(valorAnterior);
  const atual = parseFloat(valorAtual);
  let resultado;

  // Verifica o operador e realiza a operação correspondente
  switch (operador) {
    case '+': resultado = anterior + atual; break; // Soma
    case '-': resultado = anterior - atual; break; // Subtração
    case '*': resultado = anterior * atual; break; // Multiplicação
    case '/': resultado = anterior / atual; break; // Divisão
  }

  // Converte o resultado para string e mostra no display
  valorAtual = resultado.toString();

  // Limpa operador e valor anterior
  operador = null;
  valorAnterior = '';

  // Atualiza o display com o resultado final
  atualizarDisplay();
};


// ====================================
// 🔹 LIMPAR TUDO (BOTÃO "AC")
// ====================================

const limparDisplay = () => {
  // Reseta tudo aos valores iniciais
  valorAtual = '0';
  valorAnterior = '';
  operador = null;

  // Atualiza o display (mostrando 0)
  atualizarDisplay();
};


// ====================================
// 🔹 APAGAR ÚLTIMO NÚMERO (BOTÃO "DEL")
// ====================================

const apagarUltimo = () => {
  // Remove o último dígito; se só restar um, volta para '0'
  valorAtual = valorAtual.length > 1 ? valorAtual.slice(0, -1) : '0';

  // Atualiza o display
  atualizarDisplay();
};


// Cria números que sobem flutuando no fundo da tela
const criarNumeroFlutuante = () => {
  const numero = document.createElement('div');
  numero.className = 'floating-number';
  numero.textContent = Math.floor(Math.random() * 10); // Número aleatório de 0 a 9
  numero.style.left = Math.random() * 100 + '%';       // Posição horizontal aleatória
  numero.style.fontSize = (Math.random() * 30 + 30) + 'px'; // Tamanho aleatório
  document.body.appendChild(numero);

  // Remove o número após 4 segundos
  setTimeout(() => numero.remove(), 4000);
};

// Gera um novo número flutuante a cada 500 milissegundos
setInterval(criarNumeroFlutuante, 500);