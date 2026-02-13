const resultado = document.getElementById('resultado');

const input_01 = document.getElementById('valor01');
const input_02 = document.getElementById('valor02');

function calcularTotal(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número');
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        O resultado total da compra de ${v2} unidade(s) por R$ ${v1} é R$ ${v1 * v2}.
        `;
    };
};

function desconto(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número')
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        O desconto de ${v2}% em R$ ${v1} que deve ser recebido é de R$ ${(v1 * v2) / 100}.
        `;
    };
};

function juros(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número');
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        O acréscimo de ${v2}% em R$ ${v1} que deve ser recebido resulta em R$ ${((v1 * v2) / 100) + v1} ao todo.
        `;
    };
};

function comissao(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número');
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        A comissão de ${v2}% em R$ ${v1} que deve ser recebido resulta em R$ ${(v1 * v2) / 100}.
        `;
    };  
};

function lucro(){
    const v1 = parseFloat(input_01.value);
    const v2 = parseFloat(input_02.value);

    if (isNaN(v1) || isNaN(v2)){
        alert('Valor 01 ou Valor 02 inválido. Digite um número');
    }
    else {
        resultado.style.display = 'flex';
        resultado.innerHTML = `
        Para um produto de valor R$ ${v1} e um custo de ${v2}, você deve receber R$ ${v1 - v2} de lucro.
        `;
    };  
};

function limpar(){
    resultado.style.display = 'none';
    input_01.value = '';
    input_02.value = '';
    input_01.focus();
};
