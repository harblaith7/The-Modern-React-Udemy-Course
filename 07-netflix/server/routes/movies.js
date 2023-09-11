const router = require("express").Router();
const { prisma } = require("../db");

router.get("/movies/list", async (req, res) => {
  const offset = parseInt(req.query.offset);
  const count = await prisma.movie.count();
  const movies = await prisma.movie.findMany({
    take: 12,
    skip: offset,
  });
  return res.json({ movies, count });
});

router.get("/movie/:id", async (req, res) => {
  const id = req.params.id;
  const movie = await prisma.movie.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return res.send(movie);
});

module.exports = router;
