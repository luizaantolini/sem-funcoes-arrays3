let nomes = [];
let alturas = [];
let qtd = 0;

while (true) {
    nomes[qtd] = prompt("Digite o nome da pessoa:");
    alturas[qtd] = parseFloat(prompt("Digite a altura da pessoa:"));

    qtd++;

    let continuar = prompt("Deseja adicionar outra pessoa? (S/N)");

    if (continuar != "S" && continuar != "s") {
        break;
    }
}

let maiorAltura = alturas[0];
let menorAltura = alturas[0];
let posMaior = 0;
let posMenor = 0;

for (let i = 1; i < qtd; i++) {
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
        posMaior = i;
    }

    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
        posMenor = i;
    }
}

alert(
    "A maior altura é " + maiorAltura + " m e pertence a " + nomes[posMaior] +
    "\nA menor altura é " + menorAltura + " m e pertence a " + nomes[posMenor]
);