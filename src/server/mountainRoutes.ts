import mountains from "./mountains.js";
import { FastifyInstance } from 'fastify';

class mountainRoutes {
  routes(fastify: FastifyInstance) {
    fastify.get("/api/outdoor/mountains", (req, reply) => {
      reply.send(mountains);
    });

    fastify.get("/api/outdoor/mountains/:id", (req, reply) => {
      const { id } = req.params as { id: string };
      const mountain = mountains.find((mountain) => mountain.id == id);
      reply.send(mountain);
    });
  }
}

export default mountainRoutes;
