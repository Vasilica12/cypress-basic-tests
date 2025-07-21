# Cypress Basic Test Project

This is a simple Cypress project that demonstrates how to write and run basic end-to-end (E2E) tests using Cypress. It includes test cases for form input, button clicks, and other common interactions.

---

## 📁 Project Structure

```
my-cypress-project/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js         # Tests for login actions
│   │   └── dashboard.cy.js     # Tests for dashboard interactions
│   └── support/
│       └── commands.js         # Custom Cypress commands
├── cypress.config.js           # Cypress configuration file
├── .gitignore                  # Ignored files and folders
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Open Cypress Test Runner

```bash
npx cypress open
```

### 4. Run Tests Headlessly

```bash
npx cypress run
```

---

## ✅ Test Summary

| File              | Description                                |
|-------------------|--------------------------------------------|
| `login.cy.js`     | Types into an email input, submits a form  |
| `dashboard.cy.js` | Clicks a button, hovers for tooltip        |

---

## ⚙️ Tech Stack

- [Cypress](https://www.cypress.io/)
- Node.js
- JavaScript

---

## 📄 Notes

- Uses [https://example.cypress.io](https://example.cypress.io) as the test site
- `node_modules`, screenshots, and videos are excluded via `.gitignore`
- You can add more test files under the `cypress/e2e/` directory

---

## 📚 Learn More

- Cypress Docs: [https://docs.cypress.io](https://docs.cypress.io)
- GitHub Setup Guide: [https://docs.github.com/en/get-started](https://docs.github.com/en/get-started)
