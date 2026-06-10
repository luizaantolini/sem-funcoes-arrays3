//Faça um programa que leia o nome, o sexo e o salário de 5 funcionários e guarde esses dados em três vetores. No final, mostre uma listagem contendo apenas os dados das funcionárias mulheres que ganham mais de R$5 mil. 

let nomes = [];
let sexos = [];
let salarios = [];  

for (let i = 0; i < 5; i++) {
    let nome = prompt("Digite o nome do funcionário " + (i + 1) + ":");
    let sexo = prompt("Digite o sexo do funcionário " + (i + 1) + " (M/F):").toUpperCase();
    let salario = parseFloat(prompt("Digite o salário do funcionário " + (i + 1) + ":"));   
    nomes[i] = nome;
    sexos[i] = sexo;
    salarios[i] = salario;
}

let resultado = "Funcionárias mulheres que ganham mais de R$5 mil:\n\n";

for (let i = 0; i < 5; i++) {   
    if (sexos[i] === "F" && salarios[i] > 5000) {
        resultado += "Nome: " + nomes[i] + "\nSalário: R$" + salarios[i].toFixed(2) + "\n\n";
    }
}

alert(resultado);   