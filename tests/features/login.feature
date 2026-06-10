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

  Scenario: Login com username vazio
    Given O usuário está na página de login
    When deixa o campo "username" vazio e insere um "password" válido
    Then o login falha e uma mensagem de erro é exibida

  Scenario: Login com senha vazia
    Given O usuário está na página de login
    When e insere um "username" válido e deixa o campo "password" vazio
    Then o login falha e uma mensagem de erro é exibida

  Scenario: Login com locked_out_user
    Given O usuário está na página de login
    When e insere um "username" bloqueado e uma senha válida
    Then o login falha e uma mensagem de erro é exibida

  Scenario: Login com problem_user
    Given O usuário está na página de login
    When e insere um "username" com problema e um "password" válido
    Then o login é bem-sucedido
    And as imagens dos produtos são todas iguais
