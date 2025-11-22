function exercicio1() {
    const nome = prompt("Digite seu nome:");
    alert("Olá, " + nome + "!");
}

function exercicio2() {
    const a = Number(prompt("Digite o primeiro número:"));
    const b = Number(prompt("Digite o segundo número:"));
    alert("A soma é: " + (a + b));
}

function exercicio3() {
    const a = Number(prompt("Digite o primeiro número:"));
    const b = Number(prompt("Digite o segundo número:"));
    alert("A subtração é: " + (a - b));
}

function exercicio4() {
    const a = Number(prompt("Digite o primeiro número:"));
    const b = Number(prompt("Digite o segundo número:"));
    alert("A multiplicação é: " + (a * b));
}

function exercicio5() {
    const a = Number(prompt("Digite o primeiro número:"));
    const b = Number(prompt("Digite o segundo número:"));
    alert("A divisão é: " + (a / b));
}

function exercicio6() {
    const n = Number(prompt("Digite um número:"));
    alert("O sucessor é: " + (n + 1));
}

function exercicio7() {
    const n = Number(prompt("Digite um número:"));
    alert("O antecessor é: " + (n - 1));
}

function exercicio8() {
    const base = Number(prompt("Digite a base:"));
    const altura = Number(prompt("Digite a altura:"));
    alert("A área do retângulo é: " + (base * altura));
}

function exercicio9() {
    const base = Number(prompt("Digite a base:"));
    const altura = Number(prompt("Digite a altura:"));
    alert("A área do triângulo é: " + ((base * altura) / 2));
}

function exercicio10() {
    const lado = Number(prompt("Digite o lado do quadrado:"));
    alert("A área do quadrado é: " + (lado * lado));
}

function exercicio11() {
    const raio = Number(prompt("Digite o raio do círculo:"));
    alert("A área do círculo é: " + (3.14 * raio * raio));
}

function exercicio12() {
    const n1 = Number(prompt("Digite a primeira nota:"));
    const n2 = Number(prompt("Digite a segunda nota:"));
    const n3 = Number(prompt("Digite a terceira nota:"));
    alert("A média é: " + ((n1 + n2 + n3) / 3));
}

function exercicio13() {
    const n = Number(prompt("Digite um número:"));
    alert("O dobro é: " + (n * 2));
}

function exercicio14() {
    const n = Number(prompt("Digite um número real:"));
    alert("A parte inteira é: " + Math.trunc(n));
}

function exercicio15() {
    const peso = Number(prompt("Digite seu peso:"));
    const altura = Number(prompt("Digite sua altura:"));
    const imc = peso / (altura * altura);
    alert("Seu IMC é: " + imc);
}

function exercicio16() {
    const nome = prompt("Nome do produto:");
    const preco = Number(prompt("Preço do produto:"));
    const desconto = preco * 0.10;
    alert("Produto: " + nome + " | Preço com desconto: " + (preco - desconto));
}

function exercicio17() {
    const i1 = Number(prompt("Digite a idade da primeira pessoa:"));
    const i2 = Number(prompt("Digite a idade da segunda pessoa:"));
    const i3 = Number(prompt("Digite a idade da terceira pessoa:"));
    alert("A média das idades é: " + ((i1 + i2 + i3) / 3));
}

function exercicio18() {
    const metros = Number(prompt("Digite o valor em metros:"));
    alert(
        "Centímetros: " + (metros * 100) +
        " | Milímetros: " + (metros * 1000)
    );
}

function exercicio19() {
    const a = Number(prompt("Digite o primeiro cateto:"));
    const b = Number(prompt("Digite o segundo cateto:"));
    const h = Math.sqrt(a*a + b*b);
    alert("A hipotenusa é: " + h);
}