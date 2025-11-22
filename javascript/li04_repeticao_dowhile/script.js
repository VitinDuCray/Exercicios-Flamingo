function exercicio1() {
    let i = 1;
    let texto = "";

    do {
        texto += i + " ";
        i++;
    } while (i <= 10);

    alert(texto);
}

function exercicio2() {
    let i = 1;
    let soma = 0;

    do {
        soma += i;
        i++;
    } while (i <= 100);

    alert("Soma = " + soma);
}

function exercicio3() {
    let i = 1;
    let pares = "";

    do {
        if (i % 2 === 0) pares += i + " ";
        i++;
    } while (i <= 50);

    alert(pares);
}

function exercicio4() {
    let i = 1;
    let soma = 0;

    do {
        let num = Number(prompt("Digite o " + i + "º número:"));
        soma += num;
        i++;
    } while (i <= 5);

    alert("Média = " + (soma / 5));
}

function exercicio5() {
    let n = Number(prompt("Digite um número para ver a tabuada:"));
    let i = 1;
    let texto = "";

    do {
        texto += `${n} x ${i} = ${n * i}\n`;
        i++;
    } while (i <= 10);

    alert(texto);
}

function exercicio6() {
    let n = Number(prompt("Digite um número inteiro positivo:"));
    let i = 1;
    let divs = "";

    do {
        if (n % i === 0) divs += i + " ";
        i++;
    } while (i <= n);

    alert("Divisores: " + divs);
}

function exercicio7() {
    let n = Number(prompt("Digite um número inteiro:"));
    let i = 1;
    let qtdDiv = 0;

    do {
        if (n % i === 0) qtdDiv++;
        i++;
    } while (i <= n);

    if (qtdDiv === 2) alert("É primo");
    else alert("Não é primo");
}

function exercicio8() {
    let limite = Number(prompt("Digite um número limite para Fibonacci:"));

    let a = 0, b = 1;
    let texto = "0 1 ";
    let prox = a + b;

    do {
        texto += prox + " ";
        a = b;
        b = prox;
        prox = a + b;
    } while (prox <= limite);

    alert(texto);
}

function exercicio9() {
    let i = 1;
    let soma = 0;

    do {
        let nome = prompt("Nome da pessoa " + i + ":");
        let idade = Number(prompt("Idade de " + nome + ":"));
        soma += idade;
        i++;
    } while (i <= 5);

    alert("Média das idades = " + (soma / 5));
}

function exercicio10() {
    let a = 0, b = 1;
    let i = 3;
    let texto = "0 1 ";

    do {
        let prox = a + b;
        texto += prox + " ";
        a = b;
        b = prox;
        i++;
    } while (i <= 20);

    alert(texto);
}

function exercicio11() {
    let n = Number(prompt("Digite um número inteiro:"));
    let i = 1;
    let soma = 0;

    do {
        if (i % 2 === 0) soma += i;
        i++;
    } while (i <= n);

    alert("Soma dos pares = " + soma);
}

function exercicio12() {
    let i = 1;
    let impares = "";

    do {
        if (i % 2 !== 0) impares += i + " ";
        i++;
    } while (i <= 50);

    alert(impares);
}

function exercicio13() {
    let n = prompt("Digite um número inteiro:");
    let i = 0;
    let texto = "";

    do {
        texto += n[i] + " ";
        i++;
    } while (i < n.length);

    alert("Dígitos: " + texto);
}

function exercicio14() {
    let n = Number(prompt("Digite um número para calcular o fatorial:"));
    let f = 1;
    let i = n;

    do {
        f *= i;
        i--;
    } while (i > 1);

    alert("Fatorial = " + f);
}

function exercicio15() {
    let soma = 0;
    let qtd = 0;
    let nome;

    do {
        nome = prompt("Digite um nome (ou 'fim' para encerrar):");

        if (nome.toLowerCase() !== "fim") {
            let idade = Number(prompt("Idade de " + nome + ":"));
            soma += idade;
            qtd++;
        }

    } while (nome.toLowerCase() !== "fim");

    if (qtd === 0) alert("Nenhuma pessoa registrada.");
    else alert("Média das idades = " + (soma / qtd));
}