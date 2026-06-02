@logout
Feature: Logout

  Scenario: Logout com sucesso
    Given O usuário está logado
    When O usuário clica no botão de logout
    Then O usuário deve ser redirecionado para a página de login