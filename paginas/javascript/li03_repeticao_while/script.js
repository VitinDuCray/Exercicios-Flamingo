function exercicio1() {
    let i = 1;
    let texto = "";

    while (i <= 10) {
        texto += i + " ";
        i++;
    }

    alert(texto);
}

function exercicio2() {
    let i = 1;
    let soma = 0;

    while (i <= 100) {
        soma += i;
        i++;
    }

    alert("Soma = " + soma);
}

function exercicio3() {
    let i = 1;
    let pares = "";

    while (i <= 50) {
        if (i % 2 === 0) pares += i + " ";
        i++;
    }

    alert(pares);
}

function exercicio4() {
    let i = 1;
    let soma = 0;

    while (i <= 5) {
        let num = Number(prompt("Digite o " + i + "º número:"));
        soma += num;
        i++;
    }

    alert("Média = " + (soma / 5));
}

function exercicio5() {
    let n = Number(prompt("Digite um número para ver a tabuada:"));
    let i = 1;
    let texto = "";

    while (i <= 10) {
        texto += `${n} x ${i} = ${n * i}\n`;
        i++;
    }

    alert(texto);
}

function exercicio6() {
    let n = Number(prompt("Digite um número inteiro positivo:"));
    let i = 1;
    let divs = "";

    while (i <= n) {
        if (n % i === 0) divs += i + " ";
        i++;
    }

    alert("Divisores: " + divs);
}

function exercicio7() {
    let n = Number(prompt("Digite um número inteiro:"));
    let i = 1;
    let qtdDiv = 0;

    while (i <= n) {
        if (n % i === 0) qtdDiv++;
        i++;
    }

    if (qtdDiv === 2) alert("É primo");
    else alert("Não é primo");
}

function exercicio8() {
    let limite = Number(prompt("Digite um número limite para Fibonacci:"));

    let a = 0;
    let b = 1;
    let texto = "0 1 ";
    let prox = a + b;

    while (prox <= limite) {
        texto += prox + " ";
        a = b;
        b = prox;
        prox = a + b;
    }

    alert(texto);
}

function exercicio9() {
    let i = 1;
    let soma = 0;

    while (i <= 5) {
        let nome = prompt("Digite o nome da pessoa " + i + ":");
        let idade = Number(prompt("Idade de " + nome + ":"));
        soma += idade;
        i++;
    }

    alert("Média das idades = " + (soma / 5));
}

function exercicio10() {
    let a = 0;
    let b = 1;
    let i = 3;
    let texto = "0 1 ";

    while (i <= 20) {
        let prox = a + b;
        texto += prox + " ";
        a = b;
        b = prox;
        i++;
    }

    alert(texto);
}

function exercicio11() {
    let n = Number(prompt("Digite um número inteiro:"));
    let i = 1;
    let soma = 0;

    while (i <= n) {
        if (i % 2 === 0) soma += i;
        i++;
    }

    alert("Soma dos pares = " + soma);
}

function exercicio12() {
    let i = 1;
    let impares = "";

    while (i <= 50) {
        if (i % 2 !== 0) impares += i + " ";
        i++;
    }

    alert(impares);
}

function exercicio13() {
    let n = prompt("Digite um número inteiro:");
    let i = 0;
    let texto = "";

    while (i < n.length) {
        texto += n[i] + " ";
        i++;
    }

    alert("Dígitos: " + texto);
}

function exercicio14() {
    let n = Number(prompt("Digite um número para calcular o fatorial:"));
    let f = 1;
    let i = n;

    while (i > 1) {
        f *= i;
        i--;
    }

    alert("Fatorial = " + f);
}

function exercicio15() {
    let nome = prompt("Digite um nome (ou 'fim' para encerrar):");
    let soma = 0;
    let qtd = 0;

    while (nome.toLowerCase() !== "fim") {
        let idade = Number(prompt("Idade de " + nome + ":"));
        soma += idade;
        qtd++;

        nome = prompt("Digite outro nome (ou 'fim' para encerrar):");
    }

    if (qtd === 0) alert("Nenhuma pessoa registrada.");
    else alert("Média das idades = " + (soma / qtd));
}