// npm install nodemon
// npm install express

// importando express
const express = require('express');

//Instanciando express
const app = express();

app.get('/welcome', (req, res) => {
    return res.status(200).send({message: "RETORNANDO"});
})

// Constante PORTA
const PORT = 7070;
// RODANDO A API NA PORTA 7070
app.listen(PORT, () => {console.log("Rodando na porta", PORT);})