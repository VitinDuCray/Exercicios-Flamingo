function exercicio1() {
    let nums = [];
    for(let i=0; i<5; i++){
        nums.push(Number(prompt("Digite um número:")));
    }
    alert("Ordem inversa: " + nums.reverse());
}

function exercicio2() {
    let soma = 0;
    for(let i=0; i<10; i++){
        soma += Number(prompt("Digite um número:"));
    }
    alert("Soma: " + soma);
}

function exercicio3() {
    let soma = 0;
    for(let i=0; i<7; i++){
        soma += Number(prompt("Digite um número:"));
    }
    alert("Média: " + soma / 7);
}

function exercicio4() {
    let cont = 0;
    for(let i=0; i<5; i++){
        if(Number(prompt("Digite um número:")) % 2 === 0){
            cont++;
        }
    }
    alert("Quantidade de pares: " + cont);
}

function exercicio5() {
    let nums = [];
    for(let i=0; i<5; i++){
        nums.push(Number(prompt("Digite um número:")));
    }
    let maior = Math.max(...nums);
    let menor = Math.min(...nums);
    alert("Maior: " + maior + " | Menor: " + menor);
}

function exercicio6() {
    let nums = [];
    for(let i=0; i<10; i++){
        nums.push(Number(prompt("Digite um número:")));
    }
    nums.sort((a,b)=>a-b);
    alert("Ordem crescente: " + nums);
}

function exercicio7() {
    let cont = 0;
    for(let i=0; i<10; i++){
        if(Number(prompt("Digite um número:")) > 0){
            cont++;
        }
    }
    alert("Positivos: " + cont);
}

function exercicio8() {
    let somaP = 0, somaI = 0, contP = 0, contI = 0;
    for(let i=0; i<5; i++){
        let n = Number(prompt("Digite um número:"));
        if(n % 2 === 0){
            somaP += n;
            contP++;
        } else {
            somaI += n;
            contI++;
        }
    }
    alert("Média pares: " + (contP>0 ? somaP/contP : 0) + " | Média ímpares: " + (contI>0 ? somaI/contI : 0));
}

function exercicio9() {
    let pos = 0, neg = 0;
    for(let i=0; i<10; i++){
        let n = Number(prompt("Digite um número:"));
        if(n > 0) pos++;
        else if(n < 0) neg++;
    }
    alert("Positivos: " + pos + " | Negativos: " + neg);
}

function exercicio10() {
    let temZero = false;
    for(let i=0; i<5; i++){
        if(Number(prompt("Digite um número:")) === 0){
            temZero = true;
        }
    }
    alert("Existe zero? " + (temZero ? "Sim" : "Não"));
}

function exercicio11() {
    let somaP = 0, somaN = 0;
    for(let i=0; i<10; i++){
        let n = Number(prompt("Digite um número:"));
        if(n > 0) somaP += n;
        else if(n < 0) somaN += n;
    }
    alert("Soma positivos: " + somaP + " | Soma negativos: " + somaN);
}

function exercicio12() {
    let nums = [];
    for(let i=0; i<5; i++){
        nums.push(Number(prompt("Digite um número:")));
    }
    nums.sort((a,b)=>b-a);
    alert("Ordem decrescente: " + nums);
}

function exercicio13() {
    let cont = 0;
    for(let i=0; i<10; i++){
        let n = Number(prompt("Digite um número:"));
        if(n >= 10 && n <= 50) cont++;
    }
    alert("No intervalo 10 a 50: " + cont);
}

function exercicio14() {
    let pares = [];
    for(let i=0; i<7; i++){
        let n = Number(prompt("Digite um número:"));
        if(n % 2 === 0) pares.push(n);
    }
    alert("Pares: " + pares);
}

function exercicio15() {
    let nomes = [];
    for(let i=0; i<5; i++){
        nomes.push(prompt("Digite um nome:"));
    }
    nomes.sort();
    alert("Ordem alfabética: " + nomes);
}
