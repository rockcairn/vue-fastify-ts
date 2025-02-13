import { resolve } from 'node:path';
import FastifyVite from '@fastify/vite';
import Fastify from 'fastify';
import fastifyEnv from '@fastify/env';
import mountainRoutes from "./server/mountainRoutes.js";

const fastify = Fastify({ logger: true });

const envSchema = {
	type: 'object',
	required: ['DB_PORT', 'DB_HOST', 'DB_DATABASE', 'DB_USERNAME', 'DB_PASSWORD' ],
	properties: {
		DB_PORT: { type: 'number' },
		DB_HOST: { type: 'string' },
		DB_DATABASE: { type: 'string' },
		DB_USERNAME: { type: 'string' },
		DB_PASSWORD: { type: 'string' }
	}
};
export type Envs = {
	DB_PORT: number;
	DB_HOST: string;
	DB_DATABASE: string;
	DB_USERNAME: string;
	DB_PASSWORD: string;
}

await fastify.register(fastifyEnv, { 
	confKey: 'config',
	schema: envSchema,
	dotenv: true // Load from .env file
});

await fastify.register(FastifyVite, {
	root: resolve(import.meta.dirname, '../'),
	dev: process.argv.includes('--dev'),
	spa: true,
});

new mountainRoutes().routes(fastify);

// Route must match vite "base": https://vitejs.dev/config/shared-options.html#base
fastify.get('/', (req, reply) => {
	return reply.html();
});

await fastify.vite.ready();

try {
	await fastify.listen({ port: 3000 });
} catch (err) {
	fastify.log.error(err);
	process.exit(1);
}
