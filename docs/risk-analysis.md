# Risk Analysis - Testes de UI (Sauce Demo)

## 1. Objetivo

Identificar, classificar e definir estratégias de mitigação para os principais riscos relacionados à aplicação sob teste e ao processo de automação, com base na experiência prática de desenvolvimento da suite de testes deste projeto.

## 2. Escala de Classificação

| Probabilidade | Descrição |
|---|---|
| Alta | Ocorre com frequência ou é praticamente certo de acontecer |
| Média | Pode ocorrer em determinadas condições |
| Baixa | Ocorrência rara ou pouco provável |

| Impacto | Descrição |
|---|---|
| Alto | Compromete a confiabilidade dos testes ou bloqueia a entrega |
| Médio | Causa retrabalho ou atraso, mas não bloqueia |
| Baixo | Efeito pontual, facilmente contornável |

## 3. Matriz de Riscos - Aplicação / Funcional

| ID | Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|---|
| R-01 | Mudança nos `data-test` attributes da aplicação sem aviso | Baixa | Alto | Centralizar locators nos Page Objects, facilitando atualização em ponto único |
| R-02 | Comportamento inconsistente de usuários especiais (`problem_user`, `locked_out_user`) | Média | Médio | Cenários dedicados para cada tipo de usuário, validando o comportamento esperado de cada um |
| R-03 | Cálculo incorreto de subtotal/total no checkout | Baixa | Alto | Cenário `CHECK-01` valida explicitamente a soma dos preços contra o subtotal exibido |
| R-04 | Validação de campos obrigatórios não disparada corretamente (First Name, Last Name, Postal Code) | Baixa | Alto | Cenários dedicados por campo (`CHECK-03`, `CHECK-04`, `CHECK-05`) |
| R-05 | Persistência do carrinho falhar entre navegações | Baixa | Médio | Cenário `CART-04` valida persistência ao navegar para fora e voltar |
| R-06 | Aplicação de demonstração (SauceDemo) ficar indisponível ou instável | Baixa | Alto | Sem mitigação direta possível (dependência externa); monitorar disponibilidade antes de execuções em CI |

## 4. Matriz de Riscos - Processo de Automação

| ID | Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|---|
| R-07 | Timeout em cenários por lentidão no `launch()` do browser a cada cenário | Alta | Alto | Reaproveitar instância do `browser` via `BeforeAll`/`AfterAll`, abrindo apenas uma nova `page` por cenário |
| R-08 | Vazamento de estado entre cenários (browser/page não isolados corretamente) | Média | Alto | Uso do World object (`this`) do Cucumber com hooks `Before`/`After` para isolar contexto por cenário |
| R-09 | Testes flaky por falta de `await` em ações assíncronas | Média | Médio | Revisão de step definitions; uso consistente de `await` em todas as chamadas do Playwright |
| R-10 | Step definitions duplicadas ou ambíguas entre arquivos `.feature` | Média | Médio | Nomenclatura clara e específica por contexto (ex: `está na página de checkout` reaproveitado intencionalmente) |
| R-11 | Falha de execução por diferenças de ambiente (headless vs headed, SO) | Média | Baixo | Parametrização do modo `headless` via variável de ambiente |
| R-12 | Mudança de versão do Playwright/Cucumber.js quebrar compatibilidade | Baixa | Médio | Versões fixadas no `package.json`; testes executados antes de qualquer atualização de dependência |

## 5. Riscos Não Mitigados (aceitos no escopo atual)

| ID | Risco | Justificativa |
|---|---|---|
| R-13 | Ausência de testes cross-browser (Firefox, WebKit) | Fora do escopo atual; projeto cobre apenas Chromium |
| R-14 | Ausência de testes de acessibilidade e performance | Fora do escopo atual; foco em testes funcionais E2E |
| R-15 | Dependência de uma aplicação de terceiros (SauceDemo) sem controle sobre disponibilidade/mudanças | Inerente ao uso de uma aplicação pública de demonstração |