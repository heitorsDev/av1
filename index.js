class personagem {
    #vida
    #forca
    #mana
    set vida(value) {
        if (value > 20) {
            throw new Error("vida maior que 20")
        }
        this.#vida = value
    }
    get vida() {
        return this.#vida
    }
    set forca(value) {
        if (value > 15) {
            throw new Error("forca maior que 15")
        }
        this.#forca = value
    }
    get forca() {
        return this.#forca
    }
    set mana(value) {
        if (value > 40) {
            throw new Error("mana maior que 40")
        }
        this.#mana = value
    }
    get mana() {
        return this.#mana
    }
    get morto(){
        if (this.#vida<=0){
            return true
        }
        return false
    }

    constructor(vida, forca, mana) {
        this.#vida = vida;
        this.#forca = forca;
        this.#mana = mana;
    }
    atacar(personagem) {
        personagem.vida -= this.#forca
        console.log("")
        console.log("Atacante: ")
        this.exibir()
        console.log("Vítima: ")
        personagem.exibir()
        console.log("")
    }
    exibir() {
        console.log("O personagem está com: ", this.#vida, " vida; ", this.#mana, " mana; ", this.#forca, " forca")
    }

}
const personagem1 = new personagem(10, 10, 10)
class mago extends personagem {
    constructor(vida, forca, mana, magia) {
        super(vida, forca, mana)
        this.magia = magia
    }
    usarMagia() {
        console.log("magia")
    }
    exibir() {
        console.log("O mago está com: ", this.vida, " vida; ", this.mana, " mana; ", this.forca, " forca; ", this.magia, " magia")
    }

}
class guerreiro extends personagem {
    constructor(vida, forca, mana, armadura) {
        super(vida, forca, mana)
        this.armadura = armadura
    }
    defender() {
        console.log("defendido")
    }
    exibir() {
        console.log("O guerreiro está com: ", this.vida, " vida; ", this.mana, " mana; ", this.forca, " forca; ", this.armadura, " armadura")
    }
}
class arqueiro extends personagem {
    constructor(vida, forca, mana, flechas) {
        super(vida, forca, mana)
        this.flechas = flechas
    }
    atirar() {
        console.log("*flecha*")
        this.flechas--
    }
    exibir() {
        console.log("O arqueiro está com: ", this.vida, " vida; ", this.mana, " mana; ", this.forca, " forca; ", this.flechas, " flechas")
    }

}

class main {
    #personagens
    get personagens() {
        return this.#personagens
    }
    set personagens(value) {
        this.#personagens = value
    }
    constructor(personagens) {
        this.#personagens = personagens
    }
    batalha(indexPersonagem1, indexPersonagem2){
        while (!(this.#personagens[indexPersonagem1].morto || this.#personagens[indexPersonagem2].morto)){
            if (!this.#personagens[indexPersonagem1].morto){
                this.#personagens[indexPersonagem1].atacar(this.#personagens[indexPersonagem2])
            }
            if (!this.#personagens[indexPersonagem2].morto){
                this.#personagens[indexPersonagem2].atacar(this.#personagens[indexPersonagem1])
            }
        }
    }
}

const main1 = new main([
    new guerreiro(10, 2, 0, 20),
    new arqueiro(10, 1, 0, 30),
    new mago(10, 3, 20, 23)
])

function batalhaGeral(main) { //método criado para testar a função de batalha, para o critério 2 da atividade
    for (let i = 0; i < main.personagens.length; i++) {
        for (let a = 0; a < main.personagens.length; a++) {
            if (a != i) {
                main.personagens[i].atacar(main.personagens[a])
            }
        }
    }
}
main1.batalha(0,1)