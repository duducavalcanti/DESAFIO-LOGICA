// Estrutura de repetição para executar o código em loop
while (true) {

  // Entrada do nome do herói
  let nomeHeroi = prompt("Digite o nome do herói (ou digite 'sair' para encerrar):");

  if (nomeHeroi === null || nomeHeroi.toLowerCase() === "sair") {
    alert("Programa encerrado.");
    break;
  }

  // Entrada do XP do herói
  let entradaXP = prompt("Digite a quantidade de XP do herói (ou digite 'sair' para encerrar):");

  if (entradaXP === null || entradaXP.toLowerCase() === "sair") {
    alert("Programa encerrado.");
    break;
  }

  let xpHeroi = Number(entradaXP);
  let nivel = "";

  // Estrutura de decisão para realizar o ranqueamento do herói
  if (xpHeroi <= 1000) {
    nivel = "Ferro";
  } else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
  } else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
  } else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
  } else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
  } else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
  } else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  // Saída
  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
  alert(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
}