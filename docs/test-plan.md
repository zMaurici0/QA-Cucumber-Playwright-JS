# Test Plan - Testes de UI (Sauce Demo)

## 1. Objetivo

Validar a experiência completa do usuário na aplicação de e-commerce Sauce Demo através de testes automatizados end-to-end, cobrindo autenticação, gerenciamento do carrinho de compras, fluxo de checkout e navegação.

## 2. Escopo

### Dentro do escopo

- Login/Logout com diferentes tipos de usuário
- Gerenciamento do carrinho de compras (adicionar, remover, persistência)
- Fluxo completo de compra (checkout → confirmação)
- Validação de campos obrigatórios (login e checkout)
- Navegação (menu lateral, links externos, histórico do navegador)

### Fora do escopo

- API backend do Sauce Demo (não disponível publicamente)
- Processamento real de pagamento (aplicação de demonstração)
- Cadastro de novos usuários (não disponível na aplicação)
- Testes de performance e carga
- Testes de acessibilidade (WCAG)
- Testes em múltiplos viewports (mobile/tablet)

## 3. Abordagem de Teste

### Estratégia

- **Page Object Model (POM)**: todas as interações com a página abstraídas em classes reutilizáveis
- **BDD com Gherkin**: cenários escritos em linguagem natural (português), executados via Cucumber.js
- **Web-First Assertions**: sem waits fixos; uso do auto-waiting nativo do Playwright
- **Execução sequencial**: suite roda sem paralelismo (`npx cucumber-js`)

### Tipos de teste

| Tipo | Ferramenta | Cobertura |
|---|---|---|
| Funcional E2E | Playwright + Cucumber.js | Login, logout, carrinho, checkout, navegação |
| Validação de formulário | Playwright + Cucumber.js | Campos obrigatórios (login e checkout) |
| Relatórios | Allure, HTML Reporter | Todas as execuções |

## 4. Ambiente de Teste

- **URL**: https://www.saucedemo.com/
- **Browser**: Chromium
- **OS**: Cross-platform (Windows local; CI a configurar)

## 5. Dados de Teste

| Usuário | Finalidade |
|---|---|
| standard_user | Testes de caminho feliz |
| locked_out_user | Tratamento de erro / controle de acesso |
| problem_user | Detecção de defeitos visuais de UI |

**Senha (todos)**: `secret_sauce`

## 6. Critérios de Entrada

- Aplicação acessível na URL de teste
- Dependências do projeto instaladas (`npm install`)
- Browsers do Playwright instalados (`npx playwright install`)
- Step definitions e Page Objects implementados para os cenários do escopo

## 7. Critérios de Saída

- Todos os cenários do escopo executados
- 100% dos cenários de caminho feliz passando
- Nenhum bug crítico ou bloqueante sem resolução
- Falhas documentadas em `bug-analysis.md`
- Documentação completa (`/docs`)

## 8. Avaliação de Riscos

Ver `risk-analysis.md` para a matriz de riscos detalhada.

## 9. Entregáveis

- Suite de testes automatizados (Playwright + Cucumber.js)
- Relatório de testes (Allure/HTML)
- Documentação de análise de bugs
- Matriz de riscos
- Integração com pipeline de CI/CD (GitHub Actions)