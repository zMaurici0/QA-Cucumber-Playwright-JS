@checkout
Feature: Checkout

  Scenario: Verificar o total dos produtos no checkout
    Given O usuário tem dois produtos no carrinho
    When O usuário segue para o checkout e preenche com os dados válidos
    Then O total deve ser a soma dos preços dos produtos

  Scenario: Finalizar uma compra com sucesso
    Given O usuário tem dois produtos no carrinho
    When O usuário segue para o checkout e preenche com os dados válidos
    Then A compra deve ser concluída com sucesso