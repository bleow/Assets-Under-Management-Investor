const { PrismaClient } = require("@prisma/client");

const router = require("express").Router();
const prisma = require("./prismaSingleton").getInstance();

router.get("/test", async (req, res, next) => {
  res.json("lmao");
});

// Get all products
router.get("/products", auth, async (req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Get all categories
router.get("/categories", auth, async (req, res, next) => {
  try {
    const products = await prisma.category.findMany({
      include: { products: true },
    });
    res.json(products);
  } catch (error) {
    next(error);
  }
});

// Get product by ID
router.get("/products/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id),
      },
      include: { category: true },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Add a new product
router.post("/products", auth, async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: req.body,
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Delete a product by ID
router.delete("/products/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(id),
      },
    });
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
});

// Update a product by ID
router.patch("/products/:id", auth, async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.update({
      where: {
        id: Number(id),
      },
      data: {
        price: req.body.price,
      },
      include: {
        category: true,
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
