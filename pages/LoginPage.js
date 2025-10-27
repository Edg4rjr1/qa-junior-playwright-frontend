import { expect } from '@playwright/test';

export class PaginaLogin {
  constructor(page) {
    this.page = page;
    this.campoUsuario = page.locator('[data-test="username"]');
    this.campoSenha = page.locator('[data-test="password"]');
    this.botaoLogin = page.locator('[data-test="login-button"]');
    this.mensagemErro = page.locator('[data-test="error"]');
  }

  async acessar() {
    await this.page.goto('https://www.saucedemo.com/');
    await expect(this.page).toHaveTitle(/Swag Labs/);
  }

  async preencherUsuario(usuario) {
    await this.campoUsuario.fill(usuario);
  }

  async preencherSenha(senha) {
    await this.campoSenha.fill(senha);
  }

  async clicarLogin() {
    await this.botaoLogin.click();
  }

  async realizarLogin(usuario, senha) {
    await this.preencherUsuario(usuario);
    await this.preencherSenha(senha);
    await this.clicarLogin();
  }

  async validarMensagemErro(textoEsperado) {
    await expect(this.mensagemErro).toBeVisible();
    await expect(this.mensagemErro).toHaveText(textoEsperado);
  }
}
