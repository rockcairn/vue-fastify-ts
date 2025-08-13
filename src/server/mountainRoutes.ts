import { FastifyInstance } from 'fastify';
import databaseConnection from './knexconfig.js';
import mountains from './mountains.js';

class mountainRoutes {
  routes(fastify: FastifyInstance) {
    fastify.get('/api/outdoor/mountains', async (req, reply) => {
      try {
        const mountains = await databaseConnection(fastify)
          .select('*')
          .from('mountains');
        reply.send(mountains);
      } catch (err) {
        fastify.log.error(err);
        reply.status(500).send({ error: 'Database query failed' });
      }
      // reply.send(mountains);
    });

    fastify.get('/api/outdoor/mountains/:id', (req, reply) => {
      const { id } = req.params as { id: string };
      const mountain = mountains.find((mountain) => mountain.id == id);
      reply.send(mountain);
    });
  }
}

export default mountainRoutes;
