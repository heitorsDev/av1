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
}
class guerreiro extends personagem{
    constructor(vida,forca,mana,armadura){
        super(vida,forca,mana)
        this.armadura = armadura
    }
}
class arqueiro extends personagem{
    constructor(vida,forca,mana,flechas){
        super(vida,forca,mana)
        this.flechas = flechas
    }
}
const arqueiro1 = new arqueiro(10,10,10,10)
console.log(arqueiro1.flechas)