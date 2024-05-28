use cursoMongoDB

db.atividades.remove({});//deleting all from collection

db.atividades.insertOne({titulo:'Primeira Postagem',conteudo:'Conteudo 1',tags:[]});

db.atividades.insertOne({titulo:'Segunda Postagem',conteudo:'Conteudo 2',tags:[]});

db.atividades.insertOne({titulo:'Terceira Postagem',conteudo:'Conteudo 3',tags:[]});

db.atividades.find();

db.atividades.find().pretty();

