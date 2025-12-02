# Plataforma de Monitoramento de Crimes – Testes Automatizados

Este repositório contém a implementação dos testes **unitários (Jest)** e **funcionais (Selenium WebDriver)** da plataforma de monitoramento de crimes desenvolvida na disciplina parceira.

## 📌 Tecnologias Utilizadas
- JavaScript (ES6+)
- Jest (Testes Unitários)
- Selenium WebDriver (Testes Funcionais)
- GitHub Actions (CI)
- ChromeDriver

---

# 📁 Estrutura do Projeto

```
/src/
/components/
/pages/
/utils/
dateUtils.js
filterUtils.js

/tests/
/unit/
dateUtils.test.js
filterUtils.test.js
validation.test.js
crimeType.test.js
dashboardUpdate.test.js

/functional/
filterFlow.functional.test.js
reportFlow.functional.test.js
emptyFilter.functional.test.js

/.github/workflows/
ci.yml
```


---

# 🧪 Testes Unitários – Jest

Os testes cobrem:

- Validação de datas  
- Range entre datas  
- Tipos de crime  
- Aplicação de filtros  
- Atualização do dashboard  

Rodar os testes:


---

# 🤖 Testes Funcionais – Selenium WebDriver

Fluxos cobertos:

1. Aplicar filtros e atualizar dashboard  
2. Gerar relatório  
3. Validação de filtros vazios  

Para executar:


(Instalar ChromeDriver antes)

---

# 🔄 CI – Integração Contínua

Pipeline configurado com:

- GitHub Actions  
- Execução automática do `npm test`  

Arquivo: `/.github/workflows/ci.yml`

---

# 👀 Code Review

O repositório inclui Pull Request revisado contendo:

- Comentários  
- Sugestões  
- Correções aplicadas  

---

# 📘 Relatório no Notion

O relatório acompanha:

- Plano de Testes  
- Casos de teste unitários  
- Casos funcionais  
- Evidências (prints, logs, código)  
- Conclusões

---

# 👨‍💻 Autores

Equipe da disciplina de V&V — 2025.
