const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

prisma.post.delete({
    where: {
        id: 1
    }
}).then(result => console.log("post cancellato" + result))