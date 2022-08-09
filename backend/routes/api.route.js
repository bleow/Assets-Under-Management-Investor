const router = require('express').Router();
const {PrismaClient} = require('@prisma/client')

// Singleton design pattern for creating the Prisma client. 
// This is to ensure only 1 ORM connects to our database and hence minimise overhead
var prismaSingleton = (function() {
  var instance;

  function createInstance() {
    var object = new PrismaClient();
    return object;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };

})();

//prismaSingleton.getInstance();

const prisma = new PrismaClient();

// Get all products
router.get('/products', async (req, res, next) => {
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
router.get('/categories', async (req, res, next) => {
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
router.get('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: {
        id: Number(id)
      },
      include: { category: true }
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Add a new product
router.post('/products', async (req, res, next) => {
  try {
    const product = await prisma.product.create({
      data: req.body
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
});

// Delete a product by ID
router.delete('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await prisma.product.delete({
      where: {
        id: Number(id),
      }
    });
    res.json(deletedProduct);
  } catch (error) {
    next(error);
  }
});

// Update a product by ID
router.patch('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.update({
      where: {
        id: Number(id)
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
