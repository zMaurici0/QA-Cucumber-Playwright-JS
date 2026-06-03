@login
Feature: Login

  Scenario: Login Válido
    Given O usuário está na página de login
    When e insere um "username" e um "password" válidos
    Then o login é bem-sucedido e o usuário é redirecionado para a página inicial

  Scenario: Login Inválido
    Given O usuário está na página de login
    When e insere um "username" e um "password" inválidos
    Then o login falha e uma mensagem de erro é exibida