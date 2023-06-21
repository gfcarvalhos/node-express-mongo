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

app.get('/livros/:id',(req, res) => {
  let index = buscarLivro(req.params.id); //utiliza a funcao criada para encontrar o id dentro da lista
  res.json(livros[index]); //devolve o array inteiro após a alteração
})

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro cadastrado com sucesso')
})

app.put('/livros/:id',(req, res) => {
  let index = buscarLivro(req.params.id); //utiliza a funcao criada para encontrar o id dentro da lista
  livros[index].titulo = req.body.titulo; //altera o titulo do livro com o index encontrado
  res.json(livros); //devolve o array inteiro após a alteração
})

app.delete('/livros/:id',(req, res) => {
  let {id} = req.params //atribuição via desestruturação
  let index = buscarLivro(id); //utiliza a funcao criada para encontrar o id dentro da lista
  livros.splice(index, 1) //método para apagar com os parametros posição e quantidade de dados (1)
  res.send(`Livro ${id} removido com sucesso`); 
})

function buscarLivro(id){
  return livros.findIndex(livro => livro.id == id)
}

export default app
