const { CEO } = require("./Singleton");

console.log("INICIANDO PROGRAMINHA");

const ceo1 = new CEO("Jorge Gorduroso");
const ceo2 = new CEO("Marga Rina");
const ceo3 = new CEO("Darth Vader");

console.log("\nVerificando instâncias de CEO");
console.log(`CEO 1 === CEO 2 ??: ${ceo1 === ceo2}`);
console.log(`CEO 2 === CEO 3 ??: ${ceo2 === ceo3}`);
console.log(`CEO 1 === CEO 3 ??: ${ceo1 === ceo3}`);

console.log("\n\nINFORMAÇÕES DOS 'DIFERENTES' CEOs: ");
ceo1.mostrarStatus(); 
ceo2.mostrarStatus(); 
ceo3.mostrarStatus();

console.log("\nFazendo algumas ações para provar o meu ponto");
console.log("\nDefinindo o salário para o CEO 1 (50000)");
ceo1.definirSalario(50000);
console.log("\nDefinindo o salário para o CEO 2 (30000)");
ceo2.definirSalario(30000);
console.log("\nDefinindo o salário para o CEO 3 (40000)");
ceo3.definirSalario(40000);

console.log("\nCEO 1 tomando decisão (e que péssima decisão que é investir na Haas)");
ceo1.tomarDecisao("Investir R$2 milhões na Haas");
console.log("\nCEO 2 tomando decisão (bro, é a Ferrari, tem certeza?)");
ceo2.tomarDecisao("Investir R$10 milhões na Ferrari");
console.log("\nCEO 3 tomando decisão (AÍ SIM, #VERSTAPPENPENTA 🥱🥱😴😴)");
ceo3.tomarDecisao("Investir R$20 milhões na Red Bull");

console.log("\nStatus do CEO 1");
ceo1.mostrarStatus();
console.log("\nStatus do CEO 2");
ceo2.mostrarStatus();
console.log("\nStatus do CEO 3");
ceo3.mostrarStatus();

console.log("\nMostrando decisões de 'todos' (são o mesmo né paizão) CEO:");
ceo1.getDecisoesTomadas();
ceo2.getDecisoesTomadas();
ceo3.getDecisoesTomadas();

console.log("\nSão todos o mesmo CEO, bro 🥀");