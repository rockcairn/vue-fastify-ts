# VUE-FASTIFY-TS

- Vue 3 FE
- Fastify BE with flyway, knex and mysql

## Packages

- vue 3
- fastify
- typescript
- vite
- pinia
- knex
- mysql
- flyway
- vitest
- testing-library

## Concepts

- Pull from various hello world and getting started repos
- Content choices are from [rockcairn.com](http://rockcairn.com)
  - a reinvisioning of the rockcairn site as VueJS and NodeJS versus php

| Home Page                                         | Mountains Page                                          |
| ------------------------------------------------- | ------------------------------------------------------- |
| ![Home Page](/public/documentation/home-page.jpg) | ![Peaks Page](/public/documentation/mountains-page.jpg) |

## Getting Started

1. Install the packages: `pnpm install`
1. Create a _.env_ file based on _.env.sample_
   - that references your already created mysql database.
   - > _there are many ways to install mysql and I am using my instance from my
     > https://www.apachefriends.org/ XXAMP install which I use for PHP development._
1. Adjust the _flyway.cjs_ file to match your connection information
1. Create Tables and Seed your database with flyway
   - `pnpm migrate`
1. Run the development server: `pnpm dev`
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the results
   1. Adjust the url for your hostname and port choices in your _server.ts_ file
