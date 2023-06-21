import express from 'express';

const app = express();

app.use(express.json()) //interpreta o chega via post e via put, transformando em obj e armazenando

const livros = [
  {id: 1, 'titulo': 'Senhor dos aneis'},
  {id: 2, 'titulo': 'O Hobbit'}
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
  res.status(200).json(livros)
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso')
})

export default app
