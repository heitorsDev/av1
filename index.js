class personagem{
    #vida
    #forca
    #mana
    set vida(value){
        if (value>20){
            throw new Error("vida maior que 20")
        }
        this.#vida = value
    }
    get vida(){
        return this.#vida
    }
    set forca(value){
        if (value>15){
            throw new Error("forca maior que 15")
        }
        this.#forca = value
    }
    get forca(){
        return this.#forca
    }
    set mana(value){
        if (value>40){
            throw new Error("mana maior que 40")
        }
        this.#mana = value
    }
    get mana(){
        return this.#mana
    }
    constructor(vida,forca,mana){
        this.#vida = vida;
        this.#forca = forca;
        this.#mana = mana;
    }
    atacar(){
        console.log("ataque")
    }

}
const personagem1 = new personagem(10,10,10)
class mago extends personagem{
    constructor(vida,forca,mana,magia){
        super(vida,forca,mana)
        this.magia = magia
    }
    usarMagia(){
        console.log("magia")
    }
    atacar(){
        console.log("O mago causou ", this.forca, " dano")
    }
}
class guerreiro extends personagem{
    constructor(vida,forca,mana,armadura){
        super(vida,forca,mana)
        this.armadura = armadura
    }
    defender(){
        console.log("defendido")
    }
    atacar(){
        console.log("o guerreiro causou ", this.forca, " dano")
    }
}
class arqueiro extends personagem{
    constructor(vida,forca,mana,flechas){
        super(vida,forca,mana)
        this.flechas = flechas
    }
    atirar(){
        console.log("*flecha*")
        this.flechas--
    }
    
    atacar(){
        console.log("o arqueiro causou ", this.forca, " dano")
    }
}
const arqueiro1 = new arqueiro(10,10,10,10)
const guerreiro1 = new guerreiro(10,10,10,10)
const mago1 = new mago(10,10,10,10)

arqueiro1.atacar()
guerreiro1.atacar()
mago1.atacar()