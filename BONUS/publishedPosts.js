const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

prisma.post.findMany({
    where: {
        published: true
    }
}).then(result => console.log(result))