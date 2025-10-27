import { test } from '@playwright/test';
import { PaginaCarrinho } from '../../pages/carrinhoPage';
import { loginComUsuarioValido } from '../../helpers/loginHelper';

export const Produtos = {
  BACKPACK: 'add-to-cart-sauce-labs-backpack',
  BIKE_LIGHT: 'add-to-cart-sauce-labs-bike-light'
};

test('Remover produtos do carrinho', async ({ page }) => {
  const carrinho = new PaginaCarrinho(page);

  await loginComUsuarioValido(page);

  await carrinho.adicionarProduto(Produtos.BACKPACK);
  await carrinho.adicionarProduto(Produtos.BIKE_LIGHT);

  await carrinho.acessarCarrinho();

  await carrinho.validarQuantidadeEsperada(2);

  await carrinho.removerProduto('remove-sauce-labs-backpack');

  await carrinho.validarQuantidadeEsperada(1);
});
