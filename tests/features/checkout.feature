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

  Scenario: Checkout com campo First Name vazio
    Given O usuário tem dois produtos no carrinho
    And está na página de checkout
    When deixa o campo First Name vazio e preenche os demais campos obrigatórios
    Then deve ser exibida uma mensagem de erro informando que o First Name é obrigatório

  Scenario: Checkout com campo Last Name vazio
    Given O usuário tem dois produtos no carrinho
    And está na página de checkout
    When deixa o campo Last Name vazio e preenche os demais campos obrigatórios
    Then deve ser exibida uma mensagem de erro informando que o Last Name é obrigatório

  Scenario: Checkout com campo Postal Code vazio
    Given O usuário tem dois produtos no carrinho
    And está na página de checkout
    When deixa o campo Postal Code vazio e preenche os demais campos obrigatórios
    Then deve ser exibida uma mensagem de erro informando que o Postal Code é obrigatório