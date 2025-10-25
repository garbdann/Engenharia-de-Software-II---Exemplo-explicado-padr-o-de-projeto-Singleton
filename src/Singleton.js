class CEO {
    constructor(nome) {
        if(CEO.instance) {
            console.log(`A empresa já tem um CEO! Nome do CEO: ${CEO.instance.nome}`);
            return CEO.instance;        
        }

        this.nome = nome;
        this.salario = 0;
        this.decisoesTomadas = [];

        CEO.instance = this;

        console.log(`NOVO CEO CONTRATADO! Nome do novo CEO: ${this.nome}`);
    }

    definirSalario(valor) { 
        this.salario = valor;
        console.log(`Salário do CEO definido para: R$ ${valor.toLocaleString()}`);
        return this;
    }

    tomarDecisao(decisao) {
        this.decisoesTomadas.push(decisao);
        console.log(`Decisão tomada por ${this.nome}: ${decisao}`);
        return this;
    }

    getDecisoesTomadas() {
        console.log(`\nHISTÓRICO DE DECISÕES TOMADAS PELO CEO: ${this.nome}`);
        if(this.decisoesTomadas.length === 0) {
            console.log(`${this.nome} não tomou nenhuma decisão ainda! Que otário 🙈🙈`);
        } else {
            this.decisoesTomadas.forEach((decisao, index) => {
                console.log(`   ${index + 1}. ${decisao}`);
            });
        }
    }

    mostrarStatus() {
        console.log("\nSTATUS DO CEO:");
        console.log(`   Nome do CEO: ${this.nome}`);
        console.log(`   Salário do CEO: R$ ${this.salario.toLocaleString()}`);
        console.log(`   Número de decisões tomadas: ${this.decisoesTomadas.length}`);
    }
}

module.exports = { CEO };