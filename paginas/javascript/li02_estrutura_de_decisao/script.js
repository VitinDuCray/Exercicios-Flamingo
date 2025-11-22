function exercicio1() {
    let idade = Number(prompt("Digite sua idade:"));
    if (idade >= 18) alert("Você é maior de idade.");
    else alert("Você é menor de idade.");
}

function exercicio2() {
    let nome1 = prompt("Nome da primeira pessoa:");
    let idade1 = Number(prompt("Idade da primeira pessoa:"));
    let nome2 = prompt("Nome da segunda pessoa:");
    let idade2 = Number(prompt("Idade da segunda pessoa:"));

    if (idade1 > idade2) alert(nome1 + " é mais velho(a).");
    else if (idade2 > idade1) alert(nome2 + " é mais velho(a).");
    else alert("Ambos têm a mesma idade.");
}

function exercicio3() {
    let num = Number(prompt("Digite um número:"));
    if (num > 0) alert("Positivo");
    else if (num < 0) alert("Negativo");
    else alert("Zero");
}

function exercicio4() {
    let idade = Number(prompt("Digite sua idade:"));
    if (idade < 12) alert("Criança");
    else if (idade < 18) alert("Adolescente");
    else if (idade < 60) alert("Adulto");
    else alert("Idoso");
}

function exercicio5() {
    let a = Number(prompt("Digite o primeiro número:"));
    let b = Number(prompt("Digite o segundo número:"));
    alert("O maior número é: " + (a > b ? a : b));
}

function exercicio6() {
    let n1 = Number(prompt("Nota 1:"));
    let n2 = Number(prompt("Nota 2:"));
    let n3 = Number(prompt("Nota 3:"));

    let media = (n1 + n2 + n3) / 3;

    alert("Média: " + media.toFixed(2));

    if (media >= 7) alert("Aprovado");
    else alert("Reprovado");
}

function exercicio7() {
    let n = Number(prompt("Digite um número inteiro:"));
    alert(n % 2 === 0 ? "Par" : "Ímpar");
}

function exercicio8() {
    let salario = Number(prompt("Digite seu salário:"));
    let bonus = salario > 2000 ? salario * 0.10 : salario * 0.05;
    alert("Seu bônus é: R$ " + bonus.toFixed(2));
}

function exercicio9() {
    let mes = prompt("Digite o nome do mês:").toLowerCase();

    switch (mes) {
        case "janeiro":
        case "março":
        case "maio":
        case "julho":
        case "agosto":
        case "outubro":
        case "dezembro":
            alert("31 dias");
            break;
        case "abril":
        case "junho":
        case "setembro":
        case "novembro":
            alert("30 dias");
            break;
        case "fevereiro":
            alert("28 ou 29 dias");
            break;
        default:
            alert("Mês inválido");
    }
}

function exercicio10() {
    let a = Number(prompt("Número 1:"));
    let b = Number(prompt("Número 2:"));
    let c = Number(prompt("Número 3:"));

    let lista = [a, b, c];
    lista.sort((x, y) => x - y);

    alert("Ordem crescente: " + lista.join(", "));
}

function exercicio11() {
    let faltas = Number(prompt("Número de faltas do aluno:"));
    if (faltas > 15) alert("Reprovado por falta.");
    else alert("Presença suficiente.");
}

function exercicio12() {
    let codigo = Number(prompt("Código do produto (1, 2 ou 3):"));
    let qtd = Number(prompt("Quantidade comprada:"));

    let preco;

    if (codigo === 1) preco = 5.00;
    else if (codigo === 2) preco = 3.50;
    else if (codigo === 3) preco = 10.00;
    else {
        alert("Código inválido!");
        return;
    }

    alert("Total: R$ " + (preco * qtd).toFixed(2));
}

function exercicio13() {
    let idade = Number(prompt("Idade:"));
    let sexo = prompt("Sexo (M/F):").toUpperCase();

    if ((sexo === "M" && idade >= 65) || (sexo === "F" && idade >= 60)) {
        alert("Pode se aposentar.");
    } else {
        alert("Ainda não pode se aposentar.");
    }
}

function exercicio14() {
    let peso = Number(prompt("Peso (kg):"));
    let altura = Number(prompt("Altura (m):"));

    let imc = peso / (altura * altura);
    let status = "";

    if (imc < 18.5) status = "Abaixo do peso";
    else if (imc < 25) status = "Peso normal";
    else if (imc < 30) status = "Sobrepeso";
    else status = "Obesidade";

    alert("IMC: " + imc.toFixed(2) + " - " + status);
}

function exercicio15() {
    let nome = prompt("Nome do aluno:");
    let nota = Number(prompt("Nota do aluno:"));

    if (nota >= 7) alert(nome + " está aprovado!");
    else alert(nome + " está em recuperação.");
}

function exercicio16() {
    let qtd = Number(prompt("Quantidade de maçãs compradas:"));
    let preco = qtd >= 12 ? 0.40 : 0.50;

    alert("Total: R$ " + (qtd * preco).toFixed(2));
}

function exercicio17() {
    let salMin = Number(prompt("Valor do salário mínimo:"));
    let salario = Number(prompt("Salário do funcionário:"));

    let qtd = salario / salMin;

    alert("O funcionário recebe " + qtd.toFixed(2) + " salários mínimos.");
}

function exercicio18() {
    let nome = prompt("Nome do aluno:");
    let turno = prompt("Turno (M = Matutino, V = Vespertino):").toUpperCase();

    if (turno === "M") alert("Bom dia, " + nome + "!");
    else if (turno === "V") alert("Boa tarde, " + nome + "!");
    else alert("Turno inválido.");
}

function exercicio19() {
    let idade = Number(prompt("Digite sua idade:"));

    if (idade >= 18 && idade <= 70) alert("Voto obrigatório");
    else if ((idade >= 16 && idade < 18) || idade > 70) alert("Voto facultativo");
    else alert("Não pode votar");
}

function exercicio20() {
    let n1 = Number(prompt("Número 1:"));
    let n2 = Number(prompt("Número 2:"));
    let n3 = Number(prompt("Número 3:"));

    let media = (n1 + n2 + n3) / 3;

    alert("Média: " + media.toFixed(2));

    if (media >= 7) alert("Aprovado");
    else alert("Reprovado");
}