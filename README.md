

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

# TESTES

- **Login.spec.js**  
  Testa diferentes cenários de login:
  1. Login com usuário e senha válidos
  2. Login com usuário ou senha inválidos
  3. Login com campos vazios (usuário ou senha)

- **Carrinho.spec.js**  
  Testa funcionalidades do carrinho:
  1. Adição de produtos
  2. Remoção de produtos
  3. Validação da quantidade de itens no carrinho

- **Compra.spec.js**  
  Testa o fluxo de finalização de compra:
  1. Adição de produtos ao carrinho
  2. Preenchimento do formulário de checkout
  3. Validação da mensagem de compra finalizada

