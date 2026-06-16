@carrinho
Feature: Carrinho

  Scenario: Adicionar um produto ao carrinho
    Given O usuário está na página de um produto
    When O usuário clica no botão "Add to Cart"
    Then O produto deve ser adicionado ao carrinho

  Scenario: Adicionar vários itens ao carrinho
    Given O usuário está na home page
    When O usuário adiciona 3 produtos diferentes ao carrinho
    Then A badge do carrinho deve mostrar 3

  Scenario: Remover um produto do carrinho pela página do carrinho
    Given O usuário tem um produto no carrinho
    When O usuário clica no botão "Remove"
    Then O produto deve ser removido do carrinho
    
  Scenario: Persistência do carrinho
    Given O usuário tem um produto no carrinho
    And O usuário está na página do carrinho
    When O usuário navegar para a home page
    And E voltar para a página do carrinho
    Then O item ainda deve estar presente no carrinho