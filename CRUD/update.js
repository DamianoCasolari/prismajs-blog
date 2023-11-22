const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient()

prisma.post.update({
    where: {
        id: 1
    },
    data: {
        image: "Ho cambiato immagine",
        content: "Ho cambiato contenuto",
    }
}).then(result => console.log(result))