import { test, expect } from '@playwright/test';
import { PaginaLogin } from '../../pages/loginPage';
import 'dotenv/config';

test('Login com sucesso', async ({ page }) => {
  const login = new PaginaLogin(page);
  await login.acessar();
  await login.realizarLogin(process.env.USER_VALIDO, process.env.SENHA_VALIDA);
  await expect(page).toHaveURL(/inventory.html/);
});

test('Login com usuário e senha inválidos', async ({ page }) => {
  const login = new PaginaLogin(page);
  await login.acessar();
  await login.realizarLogin(process.env.USER_INVALIDO, process.env.SENHA_INVALIDA);
  await login.validarMensagemErro(
    'Epic sadface: Username and password do not match any user in this service'
  );
});

test('Login com senha vazia', async ({ page }) => {
  const login = new PaginaLogin(page);
  await login.acessar();
  await login.realizarLogin(process.env.USER_VALIDO, '');
  await login.validarMensagemErro('Epic sadface: Password is required');
});

test('Login com usuário vazio', async ({ page }) => {
  const login = new PaginaLogin(page);
  await login.acessar();
  await login.realizarLogin('', process.env.SENHA_VALIDA);
  await login.validarMensagemErro('Epic sadface: Username is required');
});
