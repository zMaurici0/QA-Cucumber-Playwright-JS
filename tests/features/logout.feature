@logout
Feature: Logout

  Scenario: Logout com sucesso
    Given O usuário está logado
    When O usuário clica no botão de logout
    Then O usuário deve ser redirecionado para a página de login

  Scenario: Botão de voltar após logout
    Given o usuário fez o logout
    When o usuário clica no botão de voltar
    Then o usuário continua na página de login
    And aparece um erro na tela

  Scenario: Acessar /inventory.html após logout
    Given o usuário fez o logout
    When o usuário digita a url da home page 
    Then o usuário continua na página de login
    And aparece um erro na tela