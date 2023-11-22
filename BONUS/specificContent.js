const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

prisma.post.findMany({
    where: {
        content : {
            contains : "quinto"
        }
    }
}).then(result => console.log(result))