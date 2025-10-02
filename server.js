const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());

async function validaLogin(usuario, senha) { //Validar os numeros
    try {
        if (isNaN(usuario) && isNaN(!senha)) {
            console.log("Os valores estão corretos!");
        }

        return { numero1, numero2, numero3 }
    } catch (error) {
        throw new Error(error)
    }
}

app.post('/login', async (req, res)  => {
    try {
        const { usuario, senha} = await req.body;
        if (usuario=="admin" && senha==1234) {
            console.log("Os seus dados estão corretos");
        }
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

