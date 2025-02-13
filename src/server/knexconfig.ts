import fastify, { FastifyInstance } from 'fastify';
import knex from 'knex';
import { Envs } from '../server.js';


export default function databaseConnection(fastify: FastifyInstance): knex.Knex<any, unknown[]> {
    const envs = fastify.getEnvs<Envs>();
    return knex({
        client: 'mysql',
        connection: {
          host: envs.DB_HOST,
          user: envs.DB_USERNAME,
          password: envs.DB_PASSWORD,
          database: envs.DB_DATABASE,
        },
      });
    }
