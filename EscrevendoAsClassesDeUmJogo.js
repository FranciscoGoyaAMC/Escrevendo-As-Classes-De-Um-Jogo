class Hero{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;        
    }

    atacar(){
        if (this.tipo === 'mago'){
            console.log(`${this.nome}, ${this.tipo}, atacou usando magia.`);
        } else if (this.tipo === 'guerreiro'){
            console.log(`${this.nome}, ${this.tipo}, atacou usando espada.`);
        } else if (this.tipo === 'monge'){
            console.log(`${this.nome}, ${this.tipo}, atacou usando artes marciais.`);
        } else if (this.tipo === 'ninja'){
            console.log(`${this.nome}, ${this.tipo}, atacou usando shuriken.`);
        }
    }
}

let ninja = new Hero('X', 20, 'ninja');
let guerreiro = new Hero('Obelix', 25, 'guerreiro');
let mago = new Hero('Gandalf', 100, 'mago');
let monge = new Hero('Leão XIV', 50, 'monge');

ninja.atacar();
guerreiro.atacar();
mago.atacar();
monge.atacar();
