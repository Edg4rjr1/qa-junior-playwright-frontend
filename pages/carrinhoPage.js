import { expect } from '@playwright/test';

export class PaginaCarrinho {
  constructor(page) {
    this.page = page;
    this.botaoCarrinho = page.locator('.shopping_cart_link');
    this.itensCarrinho = page.locator('.cart_item');

    // Checkout
    this.botaoFinalizar = page.locator('[data-test="checkout"]');
    this.inputNome = page.locator('[data-test="firstName"]');
    this.inputSobrenome = page.locator('[data-test="lastName"]');
    this.inputCEP = page.locator('[data-test="postalCode"]');
    this.botaoContinuar = page.locator('[data-test="continue"]');
    this.botaoFinalizarCompra = page.locator('[data-test="finish"]');
    this.mensagemCompra = page.locator('.complete-header');
  }

  // Adicionar produto ao carrinho
  async adicionarProduto(dataTest) {
    const botao = this.page.locator(`[data-test="${dataTest}"]`);
    await expect(botao).toBeVisible();
    await botao.click();
  }

  // Remover produto do carrinho
  async removerProduto(dataTest) {
    const botao = this.page.locator(`[data-test="${dataTest}"]`);
    await expect(botao).toBeVisible();
    await botao.click();
  }

  // Acessar página do carrinho
  async acessarCarrinho() {
    await expect(this.botaoCarrinho).toBeVisible();
    await this.botaoCarrinho.click();
    await expect(this.page).toHaveURL(/cart.html/);
  }

  // Validar quantidade de itens no carrinho
  async validarQuantidadeEsperada(quantidadeEsperada) {
    const quantidade = await this.itensCarrinho.count();
    expect(quantidade).toBe(quantidadeEsperada);
  }

  // Fluxo de finalizar compra
  async finalizarCompra(nome, sobrenome, cep) {
    await this.botaoFinalizar.click();
    await this.inputNome.fill(nome);
    await this.inputSobrenome.fill(sobrenome);
    await this.inputCEP.fill(cep);
    await this.botaoContinuar.click();
    await this.botaoFinalizarCompra.click();
  }

  // Validar mensagem de compra finalizada
  async validarMensagemCompra(mensagemEsperada) {
    await expect(this.mensagemCompra).toHaveText(mensagemEsperada);
  }
}
