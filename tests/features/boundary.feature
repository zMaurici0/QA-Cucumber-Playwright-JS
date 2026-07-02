@boundary
Feature: Boundary Testing
  Scenario: Checkout com nome muito longo
    Given O usuário tem dois produtos no carrinho
    And está na página de checkout
    When o usuário preenche o campo First Name com 100 caracteres e os demais campos válidos
    Then o formulário deve aceitar ou exibir uma mensagem de erro coerente

  Scenario: Checkout com código postal contendo apenas letras
    Given O usuário tem dois produtos no carrinho
    And está na página de checkout
    When o usuário preenche o campo Postal Code apenas com letras
    Then o formulário deve aceitar ou exibir uma mensagem de erro coerente

  Scenario: Checkout com campos preenchidos apenas com espaços em branco
    Given O usuário tem dois produtos no carrinho
    And está na página de checkout
    When o usuário preenche todos os campos obrigatórios apenas com espaços em branco
    Then deve ser exibida uma mensagem de erro informando que o campo é obrigatório

  Scenario: Checkout com caracteres especiais nos campos
    Given O usuário tem dois produtos no carrinho
    And está na página de checkout
    When o usuário preenche os campos com caracteres especiais
    Then o formulário deve aceitar ou exibir uma mensagem de erro coerente
