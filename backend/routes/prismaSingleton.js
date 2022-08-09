// Singleton design pattern for creating the Prisma client. 
// This is to ensure only 1 ORM connects to our database and hence minimise overhead
const {PrismaClient} = require('@prisma/client')

class prismaSingleton {
    static instance;
  
    static getInstance() {
        if (!prismaSingleton.instance) {
            this.instance = new PrismaClient();
        }

        return this.instance;
    }
}

module.exports = prismaSingleton