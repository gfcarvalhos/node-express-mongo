import express from 'express';
import db from "./config/dbConnect.js"
import routes from './routes/index.js'

db.on("error", console.log.bind(console,'Erro de conexão'))
db.once("open", () => {
  console.log('Conexão com o banco feita com sucesso')
})

const app = express(); //iniciando o express
app.use(express.json()) //interpreta o que chega via post e via put, transformando em obj e armazenando
routes(app); //direcionamento para as rotas

export default app
