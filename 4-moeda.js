// --- Conversor de Moedas ---
//  O objetivo deste código é simular um conversor de moedas simples, onde o usuário pode converter um valor em dólares para reais usando uma taxa de câmbio fixa.
//  Identifique os erros presentes no código e corrija-os para que o conversor funcione corretamente.

const taxaDolar = 5.50;
const transacao = { // declarei as variaveis antes
  usuario: "Carlos",
  valor: 100.00,
  concluida: true,
};

function converterParaReal(valorDolar) {
  let resultado = transacao.valor * taxaDolar;
  return resultado;
}

let resultado = converterParaReal(transacao.valor); // declarei a variavel resultado 
const valorFinal = converterParaReal(transacao.valor);

if (transacao.concluida == true) {
  console.log("O valor convertido para " + transacao.usuario + " é: R$ " + valorFinal.toFixed(2));
}
else if (transacao.concluida == false) {
  console.log("Erro no processamento.");
}
