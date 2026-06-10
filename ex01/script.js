let idades = [];

for (let i = 0; i < 4; i++) {
    let idade = parseInt(prompt("Digite a idade da pessoa " + (i + 1) + ":"));
    idades[i] = idade;
}

let maiorIdade = idades[0];
let posicaoMaiorIdade = 0;

for (let i = 1; i < 4; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicaoMaiorIdade = i;
    }
}

alert("A maior idade digitada foi: " + maiorIdade + 
    "\nEla foi digitada na " + (posicaoMaiorIdade + 1) + "ª posição.");