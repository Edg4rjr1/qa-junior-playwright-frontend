import { PaginaLogin } from '../pages/loginPage';
import 'dotenv/config';

export async function loginComUsuarioValido(page) {
  const login = new PaginaLogin(page);
  await login.acessar();
  await login.realizarLogin(process.env.USER_VALIDO, process.env.SENHA_VALIDA);
}