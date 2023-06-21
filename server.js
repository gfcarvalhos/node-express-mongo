import app from './src/app.js'
const port = process.env.PORT || 3000; //Boa pratica de identificar que a porta é o de ambiente de produção ou a fixa 3000           

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
