const router = require("express").Router();
const prisma = require("./prismaSingleton").getInstance();

router.get("/test", async (req, res, next) => {
  try {
    const newBanker = {
      email: "banker@prisma.io",
      password: "123",
      firstName: "Banker",
      lastName: "Dog",
      contactNo: "123",
      balance: 1000.0,
    };
    await prisma.account.create({ data: newBanker });

    const banker = await prisma.account.findMany();
    res.json(banker);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
