# Test Cases - Testes de UI (Sauce Demo)

## Módulo de Login

| ID | Título | Pré-condição | Passos | Resultado Esperado | Status | Severidade |
|---|---|---|---|---|---|---|
| TC-L01 | Login com usuário válido | Aplicação carregada | 1. Inserir `standard_user` / `secret_sauce` 2. Clicar em Login | Redirecionamento para a página de inventário (home) | Pass | Critical |
| TC-L02 | Login inválido | Aplicação carregada | 1. Inserir username/password inválidos 2. Clicar em Login | Erro: usuário/senha não correspondem | Pass | High |
| TC-L03 | Username vazio | Aplicação carregada | 1. Deixar o campo username vazio 2. Inserir password válido 3. Clicar em Login | Erro: "Username is required" | Pass | High |
| TC-L04 | Senha vazia | Aplicação carregada | 1. Inserir username válido 2. Deixar o campo password vazio 3. Clicar em Login | Erro: "Password is required" | Pass | High |
| TC-L05 | Login com locked_out_user | Aplicação carregada | 1. Inserir `locked_out_user` / senha válida 2. Clicar em Login | Erro: "Sorry, this user has been locked out" | Pass | High |
| TC-L06 | Login com problem_user | Aplicação carregada | 1. Inserir `problem_user` / `secret_sauce` 2. Clicar em Login | Login bem-sucedido; imagens dos produtos exibidas todas iguais | Pass | Medium |

## Módulo de Logout

| ID | Título | Pré-condição | Passos | Resultado Esperado | Status | Severidade |
|---|---|---|---|---|---|---|
| TC-LO01 | Logout com sucesso | Usuário logado | 1. Clicar no botão de logout | Redirecionamento para a página de login | Pass | Critical |
| TC-LO02 | Botão de voltar após logout | Usuário deslogado | 1. Clicar no botão de voltar do navegador | Permanece na página de login; erro exibido na tela | Pass | High |
| TC-LO03 | Acessar /inventory.html após logout | Usuário deslogado | 1. Digitar a URL da home page diretamente | Permanece na página de login; erro exibido na tela | Pass | Critical |

## Navegação

| ID | Título | Pré-condição | Passos | Resultado Esperado | Status | Severidade |
|---|---|---|---|---|---|---|
| TC-N01 | Navegar para All Items | Na página do carrinho | 1. Abrir menu 2. Selecionar "All Items" | Redirecionamento para a página de inventário | Pass | Medium |
| TC-N02 | Navegar para About | Usuário logado | 1. Abrir menu 2. Selecionar "About" | Redirecionamento para o site da Sauce Labs | Pass | Low |
| TC-N03 | Validar link do Twitter | Usuário logado | 1. Clicar no link do Twitter | Link abre em outra página/aba | Pass | Low |

## Carrinho

| ID | Título | Pré-condição | Passos | Resultado Esperado | Status | Severidade |
|---|---|---|---|---|---|---|
| TC-C01 | Adicionar um produto ao carrinho | Na página de um produto | 1. Clicar no botão "Add to Cart" | Produto adicionado ao carrinho | Pass | Critical |
| TC-C02 | Adicionar vários itens ao carrinho | Na home page | 1. Adicionar 3 produtos diferentes | Badge do carrinho exibe 3 | Pass | Critical |
| TC-C03 | Remover um produto pela página do carrinho | Produto no carrinho | 1. Clicar no botão "Remove" | Produto removido do carrinho | Pass | High |
| TC-C04 | Persistência do carrinho | Produto no carrinho, na página do carrinho | 1. Navegar para a home page 2. Voltar para a página do carrinho | Item ainda presente no carrinho | Pass | High |

## Checkout

| ID | Título | Pré-condição | Passos | Resultado Esperado | Status | Severidade |
|---|---|---|---|---|---|---|
| TC-CH01 | Verificar o total dos produtos no checkout | Dois produtos no carrinho | 1. Seguir para o checkout 2. Preencher com dados válidos | Total exibido é a soma dos preços dos produtos | Pass | High |
| TC-CH02 | Finalizar uma compra com sucesso | Dois produtos no carrinho | 1. Seguir para o checkout 2. Preencher com dados válidos 3. Finalizar compra | Mensagem de confirmação de compra concluída | Pass | Critical |
| TC-CH03 | Checkout com First Name vazio | Na página de checkout | 1. Deixar First Name vazio 2. Preencher demais campos 3. Continuar | Erro: First Name é obrigatório | Pass | High |
| TC-CH04 | Checkout com Last Name vazio | Na página de checkout | 1. Deixar Last Name vazio 2. Preencher demais campos 3. Continuar | Erro: Last Name é obrigatório | Pass | High |
| TC-CH05 | Checkout com Postal Code vazio | Na página de checkout | 1. Deixar Postal Code vazio 2. Preencher demais campos 3. Continuar | Erro: Postal Code é obrigatório | Pass | High |