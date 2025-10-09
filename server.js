const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

async function validaLogin(usuario, senha) {
    try {
        if (isNaN(usuario) && !isNaN(senha)) {
            return (usuario, senha);
        }
    } catch (error) {
        throw new Error(error)
    }
}

app.post('/login', async (req, res) => {
    try {
        const { usuario, senha } = await req.body;
        const erros = validaLogin(usuario, senha);
        if (usuario == "Admin" && senha == 1234) {
            res.status(201).json({ message: `Os seus dados estão corretos.` });
        } else {
            res.status(401).json({ message: `Os dados fornecidos estão incorretos, tente novamente` });
        }
        res.status(error).json({ message: `Dados recebidos com sucesso no servidor.` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ocorreu um erro ao processar a requisição.', errorMessage: error.message });
    }
})

app.use((req, res) => {
    res.status(404).send('Página não encontrada');
})

app.listen(PORT, () => {
    console.log(`Servidor respondendo em: http://localhost:${PORT}`);
})

