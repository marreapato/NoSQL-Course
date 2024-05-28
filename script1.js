use cursoMongoDB

db.atividades.remove({});//deleting all from collection

db.atividades.insertOne({titulo:'Primeira Postagem',conteudo:'Conteudo 1',tags:[]});

db.atividades.insertOne({titulo:'Segunda Postagem',conteudo:'Conteudo 2',tags:[]});

db.atividades.insertOne({titulo:'Terceira Postagem',conteudo:'Conteudo 3',tags:[]});

db.atividades.find();

db.atividades.find().pretty();

db.atividades.find().limit(2).pretty();///retorna apenas 2

db.atividades.find().sort({titulo: 1});

//projecao

db.atividades.find({},{titulo:true});

db.atividades.find({},{titulo:true,_id:false}).sort({titulo:1});

db.atividades.findOne({titulo:"Primeira Postagem"})
