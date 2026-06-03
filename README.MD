# Projeto QA Automation – Web Testing (Sauce Demo)

![Playwright](https://img.shields.io/badge/Playwright-Test%20Automation-green)
![Cucumber](https://img.shields.io/badge/Cucumber-BDD-brightgreen)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)
![Node.js](https://img.shields.io/badge/Runtime-Node.js-brightgreen)

Este projeto demonstra habilidades práticas de Quality Assurance (QA) aplicadas a testes Web, utilizando ferramentas modernas de automação com abordagem BDD (Behavior-Driven Development).

O objetivo deste repositório é praticar atividades comuns do dia a dia de um QA Engineer, como automação de testes, escrita de cenários em Gherkin e verificação do comportamento esperado da aplicação.

O projeto foi feito utilizando o site [Sauce Demo](https://www.saucedemo.com/) e simula cenários reais de testes, incluindo:

- Autenticação de usuários (login e logout)
- Gerenciamento de carrinho de compras
- Validação de fluxos completos de checkout
- Testes negativos

---

## 📋 Estrutura do Projeto

```
QA-CUCUMBER-PLAYWRIGHT-JS/
│
├── pages/
│   ├── carrinhoPage.js
│   ├── checkoutPage.js
│   ├── loginPage.js
│   └── logoutPage.js
│
├── tests/
│   ├── features/
│   │   ├── carrinho.feature
│   │   ├── login.feature
│   │   └── logout.feature
│   │
│   └── step_definitions/
│       ├── carrinho.js
│       ├── login.js
│       └── logout.js
│
├── allure-results/
├── reports/
│
├── cucumber.json
├── playwright.config.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## 🎯 Funcionalidades Testadas

### 1️⃣ Login

**Objetivo:** Validar o fluxo de autenticação da aplicação, cobrindo cenários positivos e negativos.

**Cenários:**

- Login com credenciais válidas
- Login com credenciais inválidas
- Login com campo username vazio
- Login com campo password vazio
- Login com usuário bloqueado (`locked_out_user`)

**Resultados:**

- Redirecionamento correto após login bem-sucedido
- Exibição de mensagem de erro nos cenários negativos
- Validação de URLs antes e após a autenticação

---

### 2️⃣ Logout

**Objetivo:** Validar que o usuário consegue encerrar a sessão corretamente.

**Cenários:**

- Logout com sucesso a partir de um usuário autenticado

**Resultados:**

- Acesso correto ao menu lateral
- Redirecionamento para a página de login após logout

---

### 3️⃣ Carrinho

**Objetivo:** Validar o gerenciamento de produtos no carrinho de compras.

**Cenários:**

- Adicionar um produto ao carrinho
- Remover um produto do carrinho
- Verificar se o total do carrinho corresponde à soma dos produtos

**Resultados:**

- Badge do carrinho atualizado corretamente
- Produto visível/removido conforme a ação
- Total do carrinho calculado e validado automaticamente

---

## 💼 Skills Demonstradas

- [x] Behavior-Driven Development (BDD) com Gherkin
- [x] Page Object Model (POM)
- [x] Testes End-to-End (E2E)
- [x] Testes Funcionais e de Interface do Usuário (UI)
- [x] Testes Negativos
- [x] Validação de URLs e elementos da interface
- [x] Organização de cenários em `.feature` files
- [x] Separação de responsabilidades entre steps e page objects

---

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---|---|
| Testes de Login | 5 |
| Testes de Logout | 1 |
| Testes de Carrinho | 3 |
| **Total de Cenários** | **9** |
| Page Objects | 4 |
| Step Definitions | 3 |
| Feature Files | 3 |

---

## 🛠️ Ferramentas & Tecnologias

| Categoria | Ferramentas |
|---|---|
| Automação de Testes | Playwright |
| Framework BDD | Cucumber |
| Linguagem | JavaScript |
| Ambiente de Execução | Node.js |
| Relatórios | Allure |
| Versionamento | Git, GitHub |

---

## ▶️ Como rodar os testes

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/QA-CUCUMBER-PLAYWRIGHT-JS.git
```

### Instalar as dependências

```bash
npm install
```

### Instalar os browsers do Playwright

```bash
npx playwright install
```

### Formas de rodar os testes

Rodar todos os testes:

```bash
npm test
```

Rodar apenas os testes de login:

```bash
npx cucumber-js --tags @login
```

Rodar apenas os testes de logout:

```bash
npx cucumber-js --tags @logout
```

Rodar apenas os testes de carrinho:

```bash
npx cucumber-js --tags @carrinho
```

### Gerar e abrir o relatório Allure

```bash
allure generate allure-results --clean -o allure-report
allure open allure-report
```

---

## 🌐 Aplicação Testada

Site utilizado para testes: [https://www.saucedemo.com/](https://www.saucedemo.com/)

O Sauce Demo é uma aplicação de e-commerce criada especificamente para fins de automação de testes, permitindo simular cenários reais como:

- Autenticação com diferentes tipos de usuário
- Navegação e seleção de produtos
- Gerenciamento do carrinho de compras
- Fluxo completo de checkout