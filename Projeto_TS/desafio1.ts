
const func = {
    codigo: 10,
    nome: 'João'
};

const func2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'joao'
}

interface Func {  
    codigo: number,
    nome: string
}

const funcObj = {} as Func;
funcObj.codigo = 10;
funcObj.nome = 'João';

const funcObj2: Func = {
    codigo: 10,
    nome: 'João'
}