use cursoMongoDB
show collections

db.atividades.find();

var australiaCity = ['melbourne','sidney','los angeles'];

var enderecoMundo = {pais:'india',estado:'mumbai',cidade:'taj mahal'};

db.teste_array.insertOne({endereco:enderecoMundo,cidade_des:australiaCity});

db.teste_array.find();
