<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

<h1 align="center">
🚧 API RESTful com Nestjs | Em Construção 🚧
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Douglasproglima/nestjs-docker">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Douglasproglima/nestjs-docker">

  <a href="https://github.com/Douglasproglima/nestjs-docker/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Douglasproglima/nestjs-docker">
  </a>

  <a href="https://github.com/Douglasproglima/nestjs-docker/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Douglasproglima/nestjs-docker">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Docker e Docker-compose</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>
<br>

## 💻 Projeto
---

[Nest](https://github.com/nestjs/nest) Simples API cujo objetivo é analisar as funcionalidades básicas e dockerizando a aplicação.

## 🎨 Layout
---
![Fluxo](./github/2.png)

## 🎒 Aprendizados
---

- Framework Nestjs
- Conceitos básicos do framework
- Docker + Containers

## Dockerfile e Docker-compose
---
```bash
# Antes de rodar o comando docker-compose up -docker
# É necessário executar pelo ao menos 1 vez no terminal:
$ chmod +x .docker/entrypoint.sh

# Em seguida execute:
$ docker-compose up -d
```

## Executar
---

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Teste
---

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License
---

Nest is [MIT licensed](LICENSE).

Feito com ❤️ por Douglas Lima <img src="https://raw.githubusercontent.com/Douglasproglima/douglasproglima/master/gifs/Hi.gif" width="30px"></h2> [Entre em contato!](https://www.linkedin.com/in/douglasproglima)