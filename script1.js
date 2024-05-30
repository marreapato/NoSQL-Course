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

// update aula 2

db.atividades.update({titulo:"Primeira Postagem"},
{$set:{conteudo:"Conteudo 0",tags:{qtde:14}},
$currentDate:{lastModified: true}
}
);//coloca um last modified

db.atividades.update({titulo:"Segunda Postagem"},
{$set:{conteudo:"Conteudo 0","tags.qtde":12},
$currentDate:{lastModified: true}});

db.atividades.find();

//atualizar multiplos documentos

db.atividades.update({conteudo:"Conteudo 0"},
{$set:{"tags.qtde":13},
$currentDate:{lastModified:true}},
{multi:true});

db.atividades.find();

//substituit o documento

db.atividades.update({titulo:"Primeira Postagem"},
{titulo:'Primeira Postagem',conteudo:'Conteudo 1',tags:{qtde:12}});

db.atividades.find();

//metodo upsert ou atualiza ou realiza insercao caso nao exista na colecao


db.atividades.update({titulo:"Quarta Postagem"},
{titulo:'Quarta Postagem',conteudo:'Conteudo 1',tags:{qtde:12}},
{upsert:true});

db.atividades.find();

//Remocao de documentos que atendam caracteristica

db.atividades.remove({titulo:"Quarta Postagem"});

//remocao de unico documento

db.atividades.remove({titulo:"Quarta Postagem"},1);

//remove tudo

db.atividades.remove({});

//remove collection

db.atividade.drop();

show collections
