const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

async function validaMensagem(nome, idade, time_favorito, res) {
    try {
        if (isNaN(nome) && !isNaN(idade) && isNaN(time_favorito)) {  
            res.status(201).json({ message: `Os valores estão corretos` });
        } else {
            throw new Error("Os valores digitados são inválidos");
        }
    } catch (error) {
        throw new Error(error);
    }
}

app.post('/mensagem', (req, res) => {
    try {
        const { nome, idade, time_favorito } = req.body;
        res.status(201).json({ message: `Olá ${nome}! Você tem ${idade} anos e torce para o ${time_favorito}!` });
        validaMensagem(nome, idade, time_favorito, res);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao processar a requisição.', errorMessage: error.message });
    }
});

app.use((req, res) => {
    res.status(404).send('Página não encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor respondendo em: http://localhost:${PORT}`);
});
