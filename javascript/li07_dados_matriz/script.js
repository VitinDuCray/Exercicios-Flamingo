function exercicio1() {
    let m = [];
    for(let i=0;i<3;i++){
        m[i]=[];
        for(let j=0;j<3;j++){
            m[i][j]=Number(prompt("Número:"));
        }
    }
    alert("Matriz:\n" + m.map(l=>l.join(" ")).join("\n"));
}

function exercicio2() {
    let soma=0;
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            soma+=Number(prompt("Número:"));
        }
    }
    alert("Soma: " + soma);
}

function exercicio3() {
    let soma=0, m=[];
    for(let i=0;i<3;i++){
        m[i]=[];
        for(let j=0;j<3;j++){
            m[i][j]=Number(prompt("Número:"));
            if(i===j) soma+=m[i][j];
        }
    }
    alert("Soma diagonal principal: " + soma);
}

function exercicio4() {
    let a=[[],[]], b=[[],[]], r=[[],[]];
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            a[i][j]=Number(prompt("A:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            b[i][j]=Number(prompt("B:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            r[i][j]=a[i][j]+b[i][j];
        }
    }
    alert("Soma:\n" + r.map(l=>l.join(" ")).join("\n"));
}

function exercicio5() {
    let m=[], maior=-Infinity;
    for(let i=0;i<3;i++){
        m[i]=[];
        for(let j=0;j<3;j++){
            let n=Number(prompt("Número:"));
            m[i][j]=n;
            if(n>maior) maior=n;
        }
    }
    alert("Maior valor: " + maior);
}

function exercicio6() {
    let soma=0;
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            soma+=Number(prompt("Número:"));
        }
    }
    alert("Média: " + (soma/16));
}

function exercicio7() {
    let a=[[],[]], b=[[],[]], r=[[],[]];
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            a[i][j]=Number(prompt("A:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            b[i][j]=Number(prompt("B:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            r[i][j]=a[i][0]*b[0][j] + a[i][1]*b[1][j];
        }
    }
    alert("Produto:\n" + r.map(l=>l.join(" ")).join("\n"));
}

function exercicio8() {
    let m=[], menor=Infinity;
    for(let i=0;i<3;i++){
        m[i]=[];
        for(let j=0;j<3;j++){
            let n=Number(prompt("Número:"));
            m[i][j]=n;
            if(n<menor) menor=n;
        }
    }
    alert("Menor valor: " + menor);
}

function exercicio9() {
    let m=[], sim=true;
    for(let i=0;i<3;i++){
        m[i]=[];
        for(let j=0;j<3;j++){
            m[i][j]=Number(prompt("Número:"));
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(m[i][j]!==m[j][i]) sim=false;
        }
    }
    alert("É simétrica? " + (sim ? "Sim" : "Não"));
}

function exercicio10() {
    let m=[[],[],[],[]], col=[0,0,0,0];
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            let n=Number(prompt("Número:"));
            m[i][j]=n;
            col[j]+=n;
        }
    }
    alert("Soma por coluna: " + col.join(" | "));
}

function exercicio11() {
    let a=[[],[]], b=[[],[]], igual=true;
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            a[i][j]=Number(prompt("A:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            b[i][j]=Number(prompt("B:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            if(a[i][j]!==b[i][j]) igual=false;
        }
    }
    alert("São iguais? " + (igual ? "Sim" : "Não"));
}

function exercicio12() {
    let m=[], prod=1;
    for(let i=0;i<3;i++){
        m[i]=[];
        for(let j=0;j<3;j++){
            m[i][j]=Number(prompt("Número:"));
        }
    }
    for(let i=0;i<3;i++){
        prod*=m[i][2-i];
    }
    alert("Produto diagonal secundária: " + prod);
}

function exercicio13() {
    let m=[[],[],[],[]], r=[];
    for(let i=0;i<4;i++){
        let maior=-Infinity;
        for(let j=0;j<4;j++){
            let n=Number(prompt("Número:"));
            m[i][j]=n;
            if(n>maior) maior=n;
        }
        r.push(maior);
    }
    alert("Maior de cada linha: " + r.join(" | "));
}

function exercicio14() {
    let m=[], id=true;
    for(let i=0;i<3;i++){
        m[i]=[];
        for(let j=0;j<3;j++){
            m[i][j]=Number(prompt("Número:"));
        }
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(i===j && m[i][j]!==1) id=false;
            if(i!==j && m[i][j]!==0) id=false;
        }
    }
    alert("É identidade? " + (id ? "Sim" : "Não"));
}

function exercicio15() {
    let a=[[],[]], b=[[],[]], r=[[],[]];
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            a[i][j]=Number(prompt("A:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            b[i][j]=Number(prompt("B:"));
        }
    }
    for(let i=0;i<2;i++){
        for(let j=0;j<2;j++){
            r[i][j]=a[i][j]-b[i][j];
        }
    }
    alert("Subtração:\n" + r.map(l=>l.join(" ")).join("\n"));
}
