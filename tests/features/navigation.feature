@navigation
Feature: Navegação

  Scenario: Navegar para All Items
    Given o usuário está na página do carrinho
    When o usuário seleciona a opção "All Items" no menu
    Then o usuário deve ser redirecionado para a página do inventário

  Scenario: Navegar para About
    Given que o usuário está logado
    When o usuário seleciona a opção "About" no menu
    Then o usuário deve ser redirecionado para o site da Sauce Labs
  
  Scenario: Validar link do Twitter
    Given que o usuário está logado
    When o usuário clicar no link do twitter
    Then o link deve abrir em outra página