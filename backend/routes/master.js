const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient(); //require('./prismaSingleton').getInstance();

////////////////////////////////////////////////////////////
// CreateAccount
////////////////////////////////////////////////////////////
router.post("/create", async (req, res, next) => {
  try {
    if (!req.body.email) {
      res.status(405).json("Email field must be filled.");
    }
    if (!req.body.password) {
      res.status(405).json("Password field must be filled.");
    }
    if (!req.body.firstName) {
      res.status(405).json("firstName field must be filled.");
    }
    if (!req.body.lastName) {
      res.status(405).json("lastName field must be filled.");
    }
    if (!req.body.contactNo) {
      res.status(405).json("contactNo field must be filled.");
    }
    const exists = await prisma.account.count({
      where: {
        email: req.body.email,
      },
    });
    console.log(exists);
    if (exists) {
      res.status(400).json("User already exists with that email.");
    }
    const pwHash = await bcrypt.hash(req.body.password, 10);
    const newUser = await prisma.account.create({
      data: {
        email: req.body.email,
        password: pwHash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactNo: req.body.contactNo,
        balance: 0,
      },
    });
    res.json({ email: req.body.email });
  } catch (error) {
    next(error);
  }
});

////////////////////////////////////////////////////////////
// LoginToAccount
////////////////////////////////////////////////////////////
router.post("/login", async (req, res, next) => {
  try {
    if (!req.body.email) {
      res.status(405).json("Email field must be filled.");
    }
    if (!req.body.password) {
      res.status(405).json("Password field must be filled.");
    }
    const userEmail = await prisma.account.findUnique({
      where: {
        email: req.body.email,
      },
    });
    if (
      !userEmail ||
      !(await bcrypt.compare(req.body.password, userEmail.password))
    ) {
      res.status(400).json("Login was unsuccessful.");
    }
    res.json({
      accessToken: jwt.sign(
        { name: req.body.email },
        process.env.ACCESS_TOKEN_SECRET
      ),
    });
  } catch (error) {
    console.log(error);
  }
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

module.exports = router;
