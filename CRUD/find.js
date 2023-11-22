const { PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient()

prisma.post.findFirst({
    where : {
        slug : "primo-post"
    }
}).then(result => console.log(result))