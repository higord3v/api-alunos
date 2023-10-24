# API de Alunos

Bem-vindo à API de Alunos! Esta API foi desenvolvida com [Nest.js](https://nestjs.com/), utiliza o ORM [Prisma](https://www.prisma.io/) e está implantada na plataforma [Cyclic](https://cyclic.io/).

## Rotas

### Listar Todos os Alunos

- **Rota**: `/api/aluno`
- **Método HTTP**: GET
- **Descrição**: Retorna uma lista de todos os alunos cadastrados.

### Buscar Aluno por ID

- **Rota**: `/api/aluno/:id`
- **Método HTTP**: GET
- **Descrição**: Retorna os detalhes de um aluno específico com base no ID fornecido.

### Cadastrar um Novo Aluno

- **Rota**: `/api/aluno`
- **Método HTTP**: POST
- **Descrição**: Permite cadastrar um novo aluno. Os campos necessários no corpo da requisição são:
  - `nome` (string)
  - `idade` (number)
  - `nota_primeiro_semestre` (number)
  - `nota_segundo_semestre` (number)
  - `professor` (string)
  - `sala` (string)

### Excluir um Aluno

- **Rota**: `/api/aluno/:id`
- **Método HTTP**: DELETE
- **Descrição**: Exclui um aluno com base no ID fornecido.

### Editar Aluno

- **Rota**: `/api/aluno/:id`
- **Método HTTP**: PUT
- **Descrição**: Atualiza os dados de um aluno com base no ID fornecido. Os campos que podem ser atualizados são os mesmos que no cadastro.

## Documentação com Swagger

A documentação completa da API pode ser acessada através do Swagger. Basta visitar a seguinte rota:

- **URL Swagger**: `/docs`
- **Descrição**: A documentação interativa da API permite explorar os endpoints, testar as requisições e obter informações detalhadas sobre como usar a API.

## Implantação

Esta API foi implantada na plataforma [Cyclic](https://cyclic.io/) para garantir alto desempenho e escalabilidade.

---
