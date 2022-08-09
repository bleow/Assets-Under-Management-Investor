const router = require('express').Router();
const prisma = require('./prismaSingleton').getInstance();

router.get('/test', async(req, res, next) => {
  try {
    res.json('lmao')
  } catch (error) {
    next(error);
  }
})

module.exports = router;
