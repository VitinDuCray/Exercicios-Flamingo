function exercicio1() {
    let texto = "";
    for (let i = 1; i <= 20; i++) {
        texto += i + " ";
    }
    alert(texto);
}

function exercicio2() {
    let texto = "";
    for (let i = 1; i <= 50; i++) {
        if (i % 2 === 0) texto += i + " ";
    }
    alert(texto);
}

function exercicio3() {
    let n = Number(prompt("Digite um número para ver a tabuada:"));
    let texto = "";
    for (let i = 1; i <= 10; i++) {
        texto += `${n} x ${i} = ${n * i}\n`;
    }
    alert(texto);
}

function exercicio4() {
    let soma = 0;
    for (let i = 1; i <= 100; i++) {
        soma += i;
    }
    alert("Soma = " + soma);
}

function exercicio5() {
    let soma = 0;
    for (let i = 1; i <= 200; i++) {
        if (i % 2 === 0) soma += i;
    }
    alert("Soma dos pares = " + soma);
}

function exercicio6() {
    let maior = Number.MIN_SAFE_INTEGER;
    let menor = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i <= 10; i++) {
        let num = Number(prompt(`Digite o ${i}º número:`));
        if (num > maior) maior = num;
        if (num < menor) menor = num;
    }

    alert(`Maior = ${maior}, Menor = ${menor}`);
}

function exercicio7() {
    let soma = 0;
    for (let i = 1; i <= 5; i++) {
        let num = Number(prompt(`Digite o ${i}º número:`));
        soma += num;
    }
    alert("Média = " + (soma / 5));
}

function exercicio8() {
    let a = 0, b = 1;
    let texto = "0 1 ";
    for (let i = 3; i <= 10; i++) {
        let prox = a + b;
        texto += prox + " ";
        a = b;
        b = prox;
    }
    alert(texto);
}

function exercicio9() {
    let N = Number(prompt("Digite um número inteiro:"));
    let texto = "";
    for (let i = 1; i <= N; i++) {
        texto += i + " ";
    }
    alert(texto);
}

function exercicio10() {
    let texto = "";
    for (let i = 101; i < 200; i += 2) {
        texto += i + " ";
    }
    alert(texto);
}

function exercicio11() {
    let maiorIdade = 0;
    for (let i = 1; i <= 10; i++) {
        let idade = Number(prompt(`Digite a ${i}ª idade:`));
        if (idade >= 18) maiorIdade++;
    }
    alert("Quantidade de pessoas maiores de idade: " + maiorIdade);
}

function exercicio12() {
    let n = Number(prompt("Digite um número inteiro para calcular o fatorial:"));
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
        fatorial *= i;
    }
    alert("Fatorial = " + fatorial);
}

function exercicio13() {
    let n = Number(prompt("Digite um número inteiro:"));
    let soma = 0;
    for (let i = 3; i <= n; i += 3) {
        soma += i;
    }
    alert("Soma dos múltiplos de 3 = " + soma);
}

function exercicio14() {
    let nomes = [];
    for (let i = 1; i <= 5; i++) {
        nomes.push(prompt(`Digite o ${i}º nome:`));
    }
    nomes.reverse();
    alert("Nomes em ordem invertida:\n" + nomes.join(", "));
}

function exercicio15() {
    let n = Number(prompt("Digite a altura do triângulo:"));
    let texto = "";
    for (let i = 1; i <= n; i++) {
        texto += "*".repeat(i) + "\n";
    }
    alert(texto);
}