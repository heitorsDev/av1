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
    get morto() {
        if (this.#vida <= 0) {
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
    defender() {
        this.vida += 1
        this.exibir()
    }
    habilidade(oponente) {
    }
    turno(acao, oponente) {
        if (!this.morto) {
            switch (acao) {
                case "ataque":
                    console.log("O personagem escolheu atacar: ")
                    this.atacar(oponente)
                    break;
                case "defesa":
                    console.log("O personagem escolheu realizar uma defesa, aumentando sua vida: ")
                    this.defender()
                    break;
                case "habilidade":
                    this.habilidade(oponente)
                    break;
            }
        } else {
            console.log("Tava morto e tentou fazer turno")
        }
    }

}
const personagem1 = new personagem(10, 10, 10)
class mago extends personagem {
    constructor(vida, forca, mana, magia) {
        super(vida, forca, mana)
        this.magia = magia
    }
    habilidade(oponente) {
        if (this.mana > 0) {
            let tempforca = this.forca
            this.mana--
            console.log("O mago jogou uma magia e perdeu 1 de mana: ")
            this.forca = this.magia
            this.atacar(oponente)
            this.forca = tempforca
        } else {
            console.log("O mago tentou jogar magia mas não tinha mana, faz o L")
        }
    }

    exibir() {
        if (!this.morto) {
            console.log("O mago está com: ", this.vida, " vida; ", this.mana, " mana; ", this.forca, " forca; ", this.magia, " magia")
        } else {
            console.log("O guerreiro bravamente morreu")
        }
    }

}
class guerreiro extends personagem {
    constructor(vida, forca, mana, armadura) {
        super(vida, forca, mana)
        this.armadura = armadura
    }

    exibir() {
        if (!this.morto) {
            console.log("O guerreiro está com: ", this.vida, " vida; ", this.mana, " mana; ", this.forca, " forca; ", this.armadura, " armadura")
        } else {
            console.log("O guerreiro bravamente morreu")
        }
    }
    habilidade(oponente) {
        console.log("O guerreiro usou a investida, mas perdeu 1 de vida em troca: ")
        this.forca += 3
        this.vida--
        this.atacar(oponente)
        this.forca -= 3
    }
}
class arqueiro extends personagem {
    constructor(vida, forca, mana, flechas) {
        super(vida, forca, mana)
        this.flechas = flechas
    }
    habilidade(oponente) {
        if (this.flechas > 0) {
            console.log("O arqueiro atirou uma flecha, curando 1 de vida e usando uma flecha: ")
            this.forca++
            this.flechas--
            this.atacar(oponente)
            this.forca--
            this.vida++
        } else {
            console.log("O arqueiro tentou atirar mas não tinha flechas, perdeu a vez kkkkkkk")
        }

    }
    exibir() {
        if (!this.morto) {
            console.log("O arqueiro está com: ", this.vida, " vida; ", this.mana, " mana; ", this.forca, " forca; ", this.flechas, " flechas")
        } else {
            console.log("O arqueiro morreu bravamente")
        }
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
    batalha(indexPersonagem1, indexPersonagem2) {
        while (!(this.#personagens[indexPersonagem1].morto || this.#personagens[indexPersonagem2].morto)) {
            if (!this.#personagens[indexPersonagem1].morto) {
                this.#personagens[indexPersonagem1].atacar(this.#personagens[indexPersonagem2])
            }
            if (!this.#personagens[indexPersonagem2].morto) {
                this.#personagens[indexPersonagem2].atacar(this.#personagens[indexPersonagem1])
            }
        }
    }
    jogosimulado() {
        let vivos = 0
        for (let i = 0; i < this.#personagens.length; i++) {
            if (!this.personagens[i].morto) {
                vivos++
            }
        }
        while (vivos > 1) {

            for (let i = 0; i < this.personagens.length; i++) {
                let randomIndex = Math.floor(Math.random() * this.#personagens.length)
                while (randomIndex == i && !this.personagens[randomIndex].morto) {
                    randomIndex = Math.floor(Math.random() * this.#personagens.length)
                }
                let randomAction = Math.floor(Math.random() * 3)
                switch (randomAction) {
                    case 0:
                        this.personagens[i].turno("ataque", this.personagens[randomIndex])
                        break;
                    case 1:
                        this.personagens[i].turno("defesa", this.personagens[randomIndex])

                        break;
                    case 2:
                        this.personagens[i].turno("habilidade", this.personagens[randomIndex])
                        break;
                }

            }



            vivos = 0
            for (let i = 0; i < this.#personagens.length; i++) {
                if (!this.personagens[i].morto) {
                    vivos++
                }
            }
        }

    }
}

const main1 = new main([
    new guerreiro(10, 2, 0, 20),
    new arqueiro(10, 1, 0, 30),
    new mago(10, 3, 20, 15)
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


main1.jogosimulado()