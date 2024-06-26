

###########################################################
# EXEMPLOS DE INSERÇÃO E CONSULTA DE DADOS (DOCUMENTOS)
###########################################################


# Inserir dados (documentos) em uma collection 
use bdmobile;
db.postagens.insert( {titulo: 'Primeira Postagem', conteudo: 'Conteudo 01', tags: []} );
db.postagens.insert( {titulo: 'Segunda Postagem', conteudo: 'Conteudo 02', tags: []} );
db.postagens.insert( {titulo: 'Terceira Postagem', conteudo: 'Conteudo 03', tags: ['esporte', 'cinema', 'praia']} );


# Mostrar todos os dados da collection
db.postagens.find();


# Exibir os dados formatados (em especial quando usando o console):
db.postagens.find().pretty();


# Limitar a quantidade de registros retornados na consulta
db.postagens.find().limit(2).pretty();
# ou
db.postagens.find().pretty().limit(2);


# Principais metodos para consultar dados: findOne() vs find()   


# Ordenar resultados
db.postagens.find().sort({titulo: 1});


# Limitar a quantide de registros retornados e exibir de forma ordenada
db.postagens.find().sort({titulo: 1}).limit(2);


# Realizar a Projeção de Atributos (seleção dos atributos a serem exibidos)
db.postagens.find({}, {titulo: true})


# Por padrão, o mongodb retorna o atributo "_id" nas consultas 
# Caso queira não exibir este atributo, basta adicionar o atributo "_id" na projeção com o seu valor para "false" 
db.postagens.find({}, {titulo: true, _id: false}).sort({titulo: 1})


# Consultar os documentos com titulo "Primeira Postagem"
db.postagens.findOne({titulo: 'Primeira Postagem'})


# Consultar os documentos com um atributo inexistente "nome"
# Como o mongo não trabalha como esquema rigido, não haverá nenhum erro, apesar, 
# claro, de nao ser retornado nenhum resultado pois nao existe nenhum documento com este atributo
db.postagens.findOne({nome: 'Primeira Postagem'})


 
