const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient()

prisma.post.findMany().then(result => console.log(result))