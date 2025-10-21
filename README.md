#  QA Portfolio — Playwright + Cucumber.js (BDD)

Projeto com estrutura profissional de testes E2E usando:

-  **Playwright**
-  **Cucumber.js com Gherkin (BDD)**
-  **Relatórios HTML automáticos**
-  **Captura de screenshots em falhas**
-  **Integração CI/CD com GitHub Actions**

---

##  Exemplo de Cenário Gherkin

```gherkin
Feature: Login na aplicação SauceDemo
  Scenario: Login bem-sucedido
    Given que estou na página de login
    When eu insiro credenciais válidas
    And clico no botão de login
    Then devo ver a lista de produtos
```

---

##  Como executar localmente

```bash
npm install
npm run install-browsers
npm test
```

Relatório gerado: `reports/report.html`

---

##  CI/CD com GitHub Actions

Cada `push` na branch `main` executa os testes e gera relatório como artefato.

---

##  Autor

**Dayane Priscila Lopes**  
📧 dpmlopesqa@gmail.com  
🔗 [linkedin.com/in/dayanepriscilaqa](https://linkedin.com/in/dayanepriscilaqa)
