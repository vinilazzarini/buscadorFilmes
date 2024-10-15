import { Filme } from "./Filme.js";

const formulario = document.forms.namedItem('busca')
const exibir = document.getElementById('filme')

async function buscarFilme(nome){
    const key = ''
    const URL = `http://www.omdbapi.com/?apikey=${key}&t=${nome}`
    return await fetch(URL)
                    .then(dados => dados.json())
}

function templateFilme(filme){
    return `
        <h2>${filme.nome}</h2>
        <img src="${filme.poster}">
        <div id="descricao">
            <p>${filme.generos}</p>
            <p>${filme.ano}</p>
            <p>${filme.tempo}</p>
            
            
            <p id="avaliacao">${filme.avaliacao}</p>

            <p id="resumo">${filme.resumo}</p>
        </div>
    
    `
}

async function mostrarFilme(nome) {
    const dados = await buscarFilme(nome)

    if(dados.Response === 'True'){
        const filme = new Filme(dados)

        exibir.innerHTML = templateFilme(filme)
    }else{
        exibir.innerHTML = `<p>${dados.Error}</p>`
    }

    formulario.filme.value = ''
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = formulario.filme.value 

    mostrarFilme(nome)
})
