const router = require('express').Router();
const prisma = require('./prismaSingleton').getInstance();

router.get('/test', async(req, res, next) => {
  try {

  } catch (error) {
    next(error);
  }
})

module.exports = router;
