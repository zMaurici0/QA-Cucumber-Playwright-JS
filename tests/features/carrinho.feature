@carrinho
Feature: Carrinho

  Scenario: Adicionar um produto ao carrinho
    Given O usuário está na página de um produto
    When O usuário clica no botão "Add to Cart"
    Then O produto deve ser adicionado ao carrinho

  Scenario: Remover um produto do carrinho
    Given O usuário tem um produto no carrinho
    When O usuário clica no botão "Remove"
    Then O produto deve ser removido do carrinho
  
  Scenario: Verificar o total do carrinho
    Given O usuário tem dois produtos no carrinho
    When O usuário visualiza o total do carrinho
    Then O total deve ser a soma dos preços dos produtos no carrinho