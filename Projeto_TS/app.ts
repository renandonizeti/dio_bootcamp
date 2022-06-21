const pessoa = {
    nome: 'Renan',
    idade: 31,
    profissao: 'desenvolvedor'
}

pessoa.idade = 32;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 20,
    profissao: 'Pintor'
}

const maria: {nome: string, idade: number, profissao: string} = {
    nome: 'Maria',
    idade: 26,
    profissao: 'Profissao'
}

enum Profissao {
    Desenvolvedor,
    Pintor,
    Professora
}