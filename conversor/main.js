// PUXANDO AS INFORMAÇÕES DO FORMULÁRIO
const form = document.getElementById("converterForm")
const amount = document.getElementById("amount")
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")
const converteamout = document.getElementById("converteamount")
const loading = document.querySelector(".loading")
const result = document.querySelector(".result")
const error = document.querySelector(".error")

const API_URL = "https://api.exchangerate-api.com/v4/latest/"
async function converterDinheiro() {
  //ATIVAR LOADING
  loading.style.display = "block"
  error.style.display = "none"
  result.style.display = "none"

  //ACESSO AO SERVIDOR
  try {

    const response = await fetch(API_URL + fromCurrency.value)
    //JSON - JS OBJECT NOTATION
    const data = await response.json()
    //FILTRAR SOMENTE OS RATES DA API
    const rate = data.rates[toCurrency.value]
    const convertedValue = (amount.value * rate).toFixed(2)

    //EXIBIR O VALOR NO RESULTADO
    converteamout.value = convertedValue
    result.style.display = "block"

    //EXIBIR NO .RESULT (BARRA ROSA)
    result.innerHTML = `
        <div style="font-size:1.4rem;">
            ${amount.value} ${fromCurrency.value} = ${converteamout.value} ${toCurrency.value} 
        </div>
        <div style="font-size: 0.9rem; margin-top:10px;">
            taxa: 1 ${fromCurrency.value} = ${rate} ${toCurrency.value}
        </div>
        `
  }
  catch (err) {
    error.style.display = "block"
    error.innerHTML = `Falha ao converter moeda. Tente Novamente!`
  }
  loading.style.display = "none"
}


//  FUNÇAO PARA CHAMAR QUAANDO CLICAR NO SUBMIT
form.addEventListener("submit", function (event) {
  //EVITA A LIMPA DO FORM CONSOLE
  event.preventDefault()
  converterDinheiro(event)
}
)