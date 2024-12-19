<h1 align="center">Orion Test - React + NestJS + Mongo</h1>

<p align="center">
  API para manejo CRUD de Libros y Autores
</p>

<p align="center">
  <a href="https://nodejs.org/docs/latest-v20.x/api/index.html"><img src="https://img.shields.io/badge/node-v20.x-green.svg" alt="node"/></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-v5.x-blue.svg" alt="typescript"/></a>
  <a href="https://docs.nestjs.com/v10/"><img src="https://img.shields.io/badge/pnpm-v9.x-purple.svg" alt="npm"/></a>
  <a href="https://www.mongodb.com"><img src="https://img.shields.io/badge/mongo-v8.0-green.svg" alt="mongodb"/></a>
  <a href="https://swc.rs/"><img src="https://img.shields.io/badge/Compiler-SWC_-orange.svg" alt="swc"/></a>
  <a href="https://vitest.dev/"><img src="https://img.shields.io/badge/Test-Vitest_-yellow.svg" alt="swc"/></a>
  <a href="https://www.docker.com/"><img src="https://img.shields.io/badge/Dockerized 🐳_-blue.svg" alt="docker"/></a>
</p>

## 👀 Motivation

Este proyecto es un desafío propuesto por Orion como parte de su proceso de selección, buscando implementar un multirepo, apuntando a una estructura hexagonal y otras buenas prácticas.

## 🧑‍💻 Developing

Este proyecto utiliza pnpm como manejador de paquetes, React para el desarrollo del front, NestJS para el back y mongoDB para el uso de base de datos

La base de datos esta  dockerizada 🐳, para poder inicar el uso de la base de datos en **development mode**, se debe correr el siguiente comando en la carpeta de bookapi:

```bash
docker-compose up -d my-service-dev
```


## ⚙️ Building

Para iniciar el proyecto a nivel de NestJS, seguir los siguientes comandos en **bookapi** 

```bash
pnpm install
```

```bash
pnpm start:dev
```