const auth = require("../middleware/auth");

const router = require("express").Router();
const prisma = require("./prismaSingleton").getInstance();

router.get("/test", auth, async (req, res, next) => {
  try {
    const banker = await prisma.account.findMany();
    res.json(banker);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
