class personagem{
    constructor(vida,forca,mana){
        this.vida = vida;
        this.forca = forca;
        this.mana = mana;
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
}
class guerreiro extends personagem{
    constructor(vida,forca,mana,armadura){
        super(vida,forca,mana)
        this.armadura = armadura
    }
    defender(){
        console.log("defendido")
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
}
const arqueiro1 = new arqueiro(10,10,10,10)