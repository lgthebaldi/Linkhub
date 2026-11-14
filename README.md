LinkHub - Gerenciador de Links Favoritos 📚
Um projeto Full-Stack construído para permitir que usuários salvem, organizem e acessem seus links favoritos de qualquer lugar. A aplicação possui um sistema de autenticação seguro e uma arquitetura moderna com frontend e backend desacoplados.

Funcionalidades:

Autenticação de Usuários: Sistema completo de cadastro e login.

Segurança com JWT: Autenticação stateless usando JSON Web Tokens para proteger as rotas.

Rotas Protegidas: Acesso ao dashboard e às funcionalidades principais apenas para usuários autenticados.

API RESTful: Backendseguindo os princípios REST para comunicação entre cliente e servidor.

(Em construcao) CRUD de Links: Funcionalidade completa para Criar, Ler, Atualizar e Deletar links.

Tecnologias e Conceitos Aplicados
Esta seção detalha as ferramentas e os conceitos macro que foram a base deste projeto, como solicitado.

Backend

Node.js: Ambiente de execução para o JavaScript no servidor.

Express.js: Framework para gerenciar rotas, requisições e middlewares.

MongoDB: Banco de dados NoSQL orientado a documentos, escolhido pela sua flexibilidade e escalabilidade para projetos em evolução.

Mongoose: Biblioteca ODM (Object Data Modeling) para modelar os dados da aplicação, adicionar validações e interagir de forma estruturada com o MongoDB.

JSON Web Tokens (JWT): Utilizado para criar um sistema de autenticação stateless, onde o servidor não precisa armazenar o estado da sessão do usuário.

Bcrypt.js: Biblioteca para criptografar as senhas dos usuários, garantindo que elas nunca sejam armazenadas em texto puro.

Dotenv: Para gerenciar variáveis de ambiente, mantendo segredos (como chaves de API e strings de conexão) fora do código-fonte.

Frontend

React: Biblioteca para construir a interface de usuário de forma declarativa e componentizada, criando uma Single-Page Application (SPA).

React Router DOM: Para gerenciar o roteamento no lado do cliente, permitindo a navegação entre páginas sem a necessidade de recarregar o site.

Axios: Cliente HTTP para realizar requisições à nossa API RESTful de forma simples e poderosa.

Vite: Ferramenta de build rápida para iniciar e desenvolver o ambiente React.

Conceitos de React:

Componentização: Divisão da UI em componentes reutilizáveis (ex: ProtectedRoute).

Hooks: Utilização de useState para gerenciar o estado dos formulários e useNavigate para redirecionamento programático.

Gerenciamento de Estado Local: Controle do estado dos inputs e da lógica de UI dentro de cada componente.

Conceitos de Arquitetura:

API RESTful: Design da API seguindo os padrões REST para criar endpoints previsíveis e bem estruturados.

Arquitetura Desacoplada: Separação total entre o frontend (cliente) e o backend (servidor), comunicando-se apenas via API.

Variáveis de Ambiente: Utilização do arquivo .env para segurança e portabilidade.

Controle de Versão com Git: Gerenciamento do código-fonte e colaboração utilizando Git e GitHub.

Middleware: Uso de funções intermediárias no Express (como cors e express.json) para tratar requisições.

Como Rodar o Projeto Localmente:

Siga os passos abaixo para executar o projeto na sua máquina.

Pré-requisitos:

Node.js (versão LTS recomendada)

Git

Uma conta no MongoDB Atlas para o banco de dados.

Passo a passo:

Clone o repositório:

Bash

git clone https://github.com/seu-usuario/linkhub.git
cd linkhub
Configure o Backend:

Bash

# Navegue para a pasta do servidor
cd server

# Instale as dependências
npm install

# Crie um arquivo .env na raiz da pasta 'server' e adicione suas variáveis
# (copie o arquivo server/.env.example como base: cp server/.env.example server/.env)
MONGO_URI=sua_string_de_conexao_do_mongodb_atlas
JWT_SECRET=seu_segredo_super_secreto_para_jwt

# Inicie o servidor backend
node index.js
O servidor estará rodando em http://localhost:3001.

Configure o Frontend (em um novo terminal):

Bash

# Navegue para a pasta do cliente
cd client

# Instale as dependências
npm install

# Inicie o cliente React
npm run dev
A aplicação estará acessível em http://localhost:5173.

📄 Endpoints da API
Atualmente, os seguintes endpoints estão disponíveis:

Método	Endpoint	Descrição
POST	/api/auth/register	Registra um novo usuário.
POST	/api/auth/login	Autentica um usuário e retorna um JWT.

Exportar para as Planilhas

Próximos Passos:

[ ] Implementar o CRUD completo para os links.

[ ] Adicionar um sistema de tags ou categorias para os links.

[ ] Criar um scraper para buscar automaticamente o título e a descrição de uma URL.

[ ] Implementar um botão de Logout no frontend.

[ ] Melhorar a estilização e a experiência do usuário.
