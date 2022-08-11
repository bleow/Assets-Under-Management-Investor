const auth = require("../middleware/auth");

const router = require("express").Router();
const prisma = require("./prismaSingleton").getInstance();

router.get("/test", async (req, res, next) => {
  try {
    const banker = await prisma.account.findMany();
    res.json(banker);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await prisma.account.upsert({
      where: { id: req.id },
      update: {
        userName: req.userName,
        firstName: req.firstName,
        lastName: req.lastName,
        location: req.location,
        profileImage: req.profileImage
      },
      create: {
        id: req.id,
        userName: req.userName,
        firstName: req.firstName,
        lastName: req.lastName,
        location: req.location,
        profileImage: req.profileImage
      },
    });
  }
});

module.exports = router;
