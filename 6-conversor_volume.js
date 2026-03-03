// --- Conversor de Medidas de Fábrica ---

const mlPorLitro = 1000;
const litro = 1000; // adicionei a variável litro para converter ml para litros

function converterMlParaLitro(quantidadeMl) {
  const resultado = quantidadeMl * mlPorLitro;
  return resultado;
}

function converterLitroParaMl(quantidadeLitros) {
  const resultado = quantidadeLitros / litro; // usei a variável litroPorMl para converter litros para ml
  return resultado;
}

const producaoDia = {
  lote1: 5000, // ml
  lote2: 2, // litros
};

const calculoLote2 = converterMlParaLitro(producaoDia.lote2);
const calculoLote1 = converterLitroParaMl(producaoDia.lote1);

console.log("--- Relatório de Produção ---");
console.log("Lote 1 (5000ml em Litros): " + calculoLote1 + "L");
console.log("Lote 2 (2L em Mililitros): " + calculoLote2 + "ml");

const estoqueBaixo = true;

if ((producaoDia.lote1 === 0)) {
  console.log("Atenção: Estoque zerado!");
}
