# Text Utils App

A simple JavaScript-based text utilities application with automated tests, linting, Docker support, and CI/CD readiness.

This project is designed as a small but realistic example of a modern web application repository, suitable for local development, containerisation, and continuous integration.

---

## 📁 Project Structure

```
/
├── src/
│   └── textUtils.js        ← The application logic: three utility functions
├── tests/
│   └── textUtils.test.js   ← Automated tests for those functions
├── index.html              ← The web interface
├── package.json            ← Project configuration and dependencies
├── .eslintrc.json          ← Linting rules
├── Dockerfile              ← How to package this app as a container
├── docker-compose.yml      ← Infrastructure as Code (you'll explore this later)
└── .github/
    └── workflows/          ← Empty for now — you'll create the pipeline here
```

### Infrastructure as Code (Example)

This project includes an example Terraform configuration that provisions an AWS S3 bucket.  
While the current application is deployed via GitHub Pages, this demonstrates how the same
application could be hosted on cloud infrastructure using Infrastructure‑as‑Code principles.
