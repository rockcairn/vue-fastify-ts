import { resolve } from 'node:path';
import FastifyVite from '@fastify/vite';
import Fastify from 'fastify';
import mountainRoutes from "./server/mountainRoutes.js";

const server = Fastify({ logger: true });

await server.register(FastifyVite, {
	root: resolve(import.meta.dirname, '../'),
	dev: process.argv.includes('--dev'),
	spa: true,
});

new mountainRoutes().routes(server);

// Route must match vite "base": https://vitejs.dev/config/shared-options.html#base
server.get('/', (req, reply) => {
	return reply.html();
});

await server.vite.ready();

try {
	await server.listen({ port: 3000 });
} catch (err) {
	server.log.error(err);
	process.exit(1);
}
