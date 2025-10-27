### Estrutura dos Testes

- **Login.spec.js**  
  Testa diferentes cenários de login:
  - Login com usuário e senha válidos
  - Login com usuário ou senha inválidos
  - Login com campos vazios (usuário ou senha)

- **Carrinho.spec.js**  
  Testa funcionalidades do carrinho:
  - Adição de produtos
  - Remoção de produtos
  - Validação da quantidade de itens no carrinho

- **Compra.spec.js**  
  Testa o fluxo de finalização de compra:
  - Adição de produtos ao carrinho
  - Preenchimento do formulário de checkout
  - Validação da mensagem de compra finalizada




1.  Clonar o repositório
    `git clone https://github.com/Edg4rjr1/qa-junior-playwright-frontend.git`

2.  Entrar na pasta:
    `cd qa-junior-playwright-frontend`

3.  Instalar as dependências:
    `npm install`

4.  Criar um arquivo `.env` na raiz do projeto e adicione sua API token:
    `USER_VALIDO=standard_user SENHA_VALIDA=secret_sauce USER_INVALIDO=user123 SENHA_INVALIDA=senha123`    

5.  Rodar os testes:
    `npx playwright test`
