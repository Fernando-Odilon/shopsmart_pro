const resultado = document.getElementById('resultado');

const input_01 = document.getElementById('valor01');
const input_02 = document.getElementById('valor02');

function calcularTotal(){
    const v1 = parseFloat(input_01.value); 
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <p>Valor 01 ou Valor 02 inválido. Digite um número positivo</p>
        `;
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        <h2>Total Calculado:</h2>
        <p>Você está adquirindo ${v2} unidades com valor unitário de R$ ${v1}</p>
        <h1>Valor total da compra: <span>R$ ${v1 * v2}</span></h1>
        `;
    };
};

function desconto(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <p>Valor 01 ou Valor 02 inválido. Digite um número positivo</p>
        `;
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        <h2>Desconto Calculado:</h2>
        <p>Foi aplicado um desconto de ${v2}% sobre o valor de ${v1}</p>
        <h1>Valor final com desconto: <span>R$ ${v1 - ((v1 * v2) /100)}</span></h1>
        `;
    };
};

function juros(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <p>Valor 01 ou Valor 02 inválido. Digite um número positivo</p>
        `;
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        <h2>Juros Calculado:</h2>
        <p>Foi aplicado um acréscimo de ${v2}% sobre o valor de ${v1}</p>
        <h1>Valor final com juros: <span>R$ ${((v1 * v2) / 100) + v1}</span></h1>
        `;
    };
};

function comissao(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <p>Valor 01 ou Valor 02 inválido. Digite um número positivo</p>
        `;
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        <h2>Comissão Calculada:</h2>
        <p>Comissão de ${v2}% sobre uma venda de ${v1}</p>
        <h1>Valor de comissão: <span>R$ ${(v1 * v2) / 100}</span></h1>
        `;
    };  
};

function lucro(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        resultado.style.display = 'flex'
        resultado.innerHTML = `
        <p>Valor 01 ou Valor 02 inválido. Digite um número positivo</p>
        `;
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        <h2>Lucro Calculado:</h2>
        <p>Preço de venda: R$ ${v1} | Custo: R$ ${v2}</p>
        <h1>Resultado financeiro: <span>R$ ${v1 - v2}</span></h1>
        `;
    };  
};

function limpar(){
    resultado.style.display = 'none';
    input_01.value = '';
    input_02.value = '';
    input_01.focus();
};
