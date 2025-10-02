const express = require('express');
const app = express();
const PORT = 8081;

app.use (express.json());

app.post('/mensagem', (req, res) => {
    try {
        const {nome, idade, time_favorito} = req.body;
        console.log(`Olá ${nome}! Você tem ${idade} anos e torce para o ${time_favorito}! `);
        res.status(201).json({ message: `Dados recebidos com sucesso no servidor.` })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Ocorreu um erro ao processar a requisição.', errorMessage: error.message })
    }
})

app.use((req, res) => {
    res.status(404).send('Página não encontrada');
})

app.listen(PORT, () => {
    console.log(`Servidor respondendo em: http://localhost:${PORT}`);
})

