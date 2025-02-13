import app from './src/app';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
  console.log(`Documentação da API em http://localhost:${PORT}/api-docs`);
});