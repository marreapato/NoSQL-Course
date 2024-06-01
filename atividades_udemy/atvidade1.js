//bancos do servideor

show dbs

use zoologico

show collections

db.animais.remove({});
//insercao documentos

db.animais.insertOne({nome:"Periquito",especie:"ave",PaisOrigem:"Brasil"});
db.animais.insertOne({nome: "Canário", especie: "ave", PaisOrigem: "Brasil"});
db.animais.insertOne({nome: "Papagaio", especie: "ave", PaisOrigem: "Austrália"});
db.animais.insertOne({nome: "Arara", especie: "ave", PaisOrigem: "Peru"});
db.animais.insertOne({nome: "Tigre", especie: "mamífero", PaisOrigem: "Índia"});
db.animais.insertOne({nome: "Elefante", especie: "mamífero", PaisOrigem: "África"});
db.animais.insertOne({nome: "Cobra", especie: "réptil", PaisOrigem: "Egito"});

db.animais.find().pretty();

//total documentos

db.animais.find().count();

