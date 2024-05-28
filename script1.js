use cursoMongoDB

db.atividades.remove({});//deleting all from collection

db.atividades.insertOne({titulo:'Primeira Postagem',conteudo:'Conteudo 1',tags:{qtde:12}});

db.atividades.insertOne({titulo:'Segunda Postagem',conteudo:'Conteudo 2',tags:{qtde:9}});

db.atividades.insertOne({titulo:'Terceira Postagem',conteudo:'Conteudo 3',tags:{qtde:11}});

db.atividades.find();

db.atividades.find().pretty();

db.atividades.find().limit(2).pretty();///retorna apenas 2

db.atividades.find().sort({titulo: 1});

//projecao

db.atividades.find({},{titulo:true});

db.atividades.find({},{titulo:true,_id:false}).sort({titulo:1});

db.atividades.findOne({titulo:"Primeira Postagem"})

db.atividades.find({conteudo:"Conteudo 2"}).pretty();

// filtro com In

db.atividades.find({conteudo:{$in:["Conteudo 1","Conteudo 2"]}}).pretty();

db.atividades.find({conteudo:{$in:["Conteudo 1","Conteudo 2","Conteudo 3"]},"tags.qtde":{$lt:12}}).pretty();

//contagem

db.atividades.count();

//operador or

db.atividades.find({"tags.qtde":{$gt:9},$or:[{conteudo:"Conteudo 1"},{conteudo:"Conteudo 2"}]}).pretty();
db.atividades.find({"tags.qtde":{$gt:9},$or:[{conteudo:"Conteudo 1"},{conteudo:"Conteudo 3"}]}).pretty();

