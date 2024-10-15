export class Filme{
    constructor(dados){
        this.nome = dados.Title
        this.ano = dados.Year
        this.tempo = dados.Runtime
        this.resumo = dados.Plot
        this.avaliacao = dados.imdbRating
        this.generos = dados.Genre
        this.poster = dados.Poster
    }
}