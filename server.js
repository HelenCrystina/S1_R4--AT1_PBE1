const express = require('express');
const app = express();
const PORT = 8081;

app.use(express.json());
async function validaNumeros(numUm, numDois, numTres) {
    try {
        if (isNaN(numUm) || isNaN(numDois) || isNaN(numTres)) {  
            throw new Error("Os valores digitados são inválidos") 
        }else{
            res.status(201).json({ message: `Os valores estão corretos` })
        }
    } catch (error) {
        throw new Error(error)
    }
}

app.post('/soma', (req, res) => {
    try {
        validaNumeros(numUm, numDois, numTres);
        const { numUm, numDois, numTres } = req.body;
        numUm = Number(numUm)
        numDois = Number(numDois)
        numTres = Number(numTres)
        const resultado = numUm + numDois + numTres;
        res.status(201).json({ message: `O resultado da soma é: ${resultado}` });
        res.status(201).json({ message: `Dados recebidos com sucesso no servidor.` });
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

