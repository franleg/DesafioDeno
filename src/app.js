import express from "express";

const app = express()

const server = app.listen(8080, () => console.log('Listening on port 8080'));

app.get('/', (req, res) => {
    res.send('¡Vamos Argentina Campeón!')
})