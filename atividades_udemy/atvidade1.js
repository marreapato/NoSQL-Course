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

//exibir ofrdem crescente

db.animais.find().sort({especie:1}).pretty();//-1 decresce

//duas primeiras aves
db.animais.find({especie:"ave"},{nome:true,_id:false}).sort({nome:1}).limit(2).pretty();

//atualizar as aves

db.animais.update({especie:"ave"},
{$set:{especie:"ave tropical"},
$currentDate:{lastModified:true}},
{multi:true});

db.animais.find().sort({especie:1}).pretty();//-1 decresce

//excluir peixes

db.animais.remove({especie:"peixe"});

db.animais.find().sort({especie:1}).pretty();//-1 decresce

db.animais.remove({});

db.animais.find().sort({especie:1}).pretty();//-1 decresce

//remove colelction

db.animais.drop();

show collections
