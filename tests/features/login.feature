Feature: Login

  Scenario: Login Válido
    Given estou na página de login
    When eu insiro meu "standard_user" e um "secret_sauce"
    Then eu tenho um login com sucesso

  Scenario: Login Inválido
    Given estou na página de login
    When eu insiro meu "standard_user" e um "wrong_password"
    Then eu vejo uma mensagem de erro indicando falha no login