'use strict';

import produtos from "./produtos.json" with { type: "json" };

function criarEstrelinhas(numero) {
    let estrelas = numero;
    let resposta = '';

    for (let i = 0; i < 5; i++) {
        if (estrelas > 0) {
            resposta += '★';
            estrelas--;
        } else {
            resposta += '☆';
        }
    }

    return resposta;
};

function criarCardProduto(produto) {
    let container = document.createElement('div');
    container.className = 'containerProduto';

    let foto = document.createElement('img');
    foto.src = `./img/${produto.imagem}`;
    foto.alt = `Foto do produto ${produto.nome}`;
    foto.className = 'foto';

    let containerInformacoes = document.createElement('div');
    containerInformacoes.className = 'containerInfos';

    let nome = document.createElement('p');
    nome.classList = 'nomeProduto';
    nome.textContent = produto.nome;

    let estrelas = document.createElement('p');
    estrelas.textContent = criarEstrelinhas(produto.classificacao);

    let descricao = document.createElement('p');
    descricao.className = 'descricaoProduto';

    let preco = document.createElement('p');
    preco.className = 'preco';
    preco.textContent = `R$ ${produto.preco}`;

    if (produto.descricao.length > 50) {
        let descricaoCortada = produto.descricao.slice(0, 50);
        descricao.textContent = descricaoCortada + '...';
    } else {
        descricao.textContent = produto.descricao;
    }


    containerInformacoes.append(nome, estrelas, descricao, preco);
    container.append(foto, containerInformacoes);
    return container;
};

const cards = produtos.map(criarCardProduto);

document.getElementById('container').replaceChildren(...cards);