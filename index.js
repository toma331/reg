import express from 'express';

const port = 5000;

const app = express()

app.use(express.json())


function start() {
    app.listen(port, () => console.log(port));
}

start()