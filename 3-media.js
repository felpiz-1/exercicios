// --- Sistema de média de alunos ---
// O objetivo deste código é calcular a média de um aluno com base em suas notas e determinar se ele foi aprovado ou reprovado.
//  Identifique os erros presentes no código e corrija-os para que o sistema funcione corretamente.

const nomeAluno = "Mariana";
const nota1 = 8;
const nota2 = 8;

function calcularMedia() {
  let media = (nota1 + nota2) / 2;
  return media; // adicionei a palavra media para retornar o valor calculado
}

const media = calcularMedia();
let statusAluno; // declarei a variável statusAluno 

if (media >= 7) {
    statusAluno = "Aprovado";
} else {
   statusAluno = "Reprovado";
}

console.log("O aluno " + nomeAluno + " está: " + statusAluno);
