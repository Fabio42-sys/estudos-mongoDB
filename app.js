const { MongoClient } = require('mongodb');

// URI de conexão, substitua pelos seus dados reais
const uri = 'mongodb://localhost:27017/meuBancoDeDados';

async function conectarInserirDados() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        // Conectar ao MongoDB
        await client.connect();
        window.alert('Conectado ao MongoDB');
        // Selecionar o banco de dados
        const database = client.db();
        // Selecionar a coleção (se não existir, será criada)
        const colecao = database.collection('usuarios');
        // Documento a ser inserido
        const usuario = { nome: 'João', idade: 25, cidade: 'São Paulo' };
        // Inserir documento na coleção
        const resultado = await colecao.insertOne(usuario);
        window.alert(`Documento inserido com ID: ${resultado.insertedId}`);
    } finally {
        // Fechar a conexão
        await client.close();
        window.alert('Conexão fechada');
    }
}

// Chamar a função principal
conectarInserirDados();
