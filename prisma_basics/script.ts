import { PrismaClient, User } from '@prisma/client'
import { equal } from 'assert'
// { log: ["query"] } pass this into PrismaClient to get the
// sql queries being used
const prisma = new PrismaClient()


async function main(){
    // const user: User = await prisma.user.create({data: { name: "John" }})
    // console.log(user)

    // await prisma.user.deleteMany()

    // const user = await prisma.user.create({
    //     data: {
    //         name: "Thomas Doe",
    //         email: "thomas@gmail.com",
    //         age: 59,
    //     },
    //     select: {
    //         id: true,
    //         name: true,
    //     }
    // })

    // createMany() is not supported for sqlite
    // const createUser = await prisma.user.createMany({
    //     data: [{
    //         name: "John Doe",
    //         email: "doe@gmail.com",
    //         age: 30
    //     }, {
    //         name: "John Doe",
    //         email: "doe@gmail.com",
    //         age: 30
    //     }]
    // })

    // console.log(user)

    // const users: User[]  = await prisma.user.findMany()
    // console.log(users)
    


    // reading data

    // filter unique columns
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "john@gmail.com"
    //     },
    //     select: {
    //         id: true,
    //         name: true
    //     }
    // })

    // const user = await prisma.user.findMany({
        // where: {
        //     name: "Thomas Doe"
        // },
        // get distinct name and age
        // distinct: ["name", "age"],

        // take only two of those records
        // take: 3,

        // skip the first one
        // skip: 0,

    //     orderBy: {
    //         age: 'desc'
    //     }
    // })


    // advanced filtering

    // const user = await prisma.user.findMany({
    //     where: {
            // name: {equals: "Thomas Doe"}
            // name: { not: "Thomas Doe" }
            // name: { in: ["Thomas Doe", "Kenny"]}
            // name: { notIn: ["Thomas Doe", "Kenny"]}

            // age: { lt: 30}
            // age: { gt: 50}
            // age: { gte: 59}

            // email: { contains: "gmail.com"}
            // email: { startsWith: "john"}
            // email: { endsWith: "gmail.com"}

            // AND: [
            //     { name: { contains: "Thomas"}},
            //     { email: { startsWith: "thomas"}}
            // ]

            // NOT: [
            //     { name: { contains: "Thomas"}},
            //     { email: { startsWith: "thomas"}}
            // ]

    //     }
    // })

    // const user = await prisma.post.findMany({
    //     where: {
    //         author: {
    //             is: {
    //                 age: 29,
    //                 email: { startsWith: "thomas"}
    //             },
    //             isNot: {
    //                 age: { gt: 60}
    //             }
    //         }
    //     }
    // })

    // update() or updateMany() updateMany() >> updates all
    // the fields that matchs the query
    // const user = await prisma.user.updateMany({
    //     data: {
    //         name: "Thomas edited",
    //         age: {
    //             increment: 1
    //         }
    //     },
    //     where: {
    //         name: { contains: "Thomas"}
    //     }
    // })


    // delete operations: delete() or deleteMany(), delete
    // with delete() we have to specify the unique fields
    // deleteMany() we can specify not just unique but also non-uniqiue
    const user = await prisma.user.deleteMany({
        where: {
            // email: "janet@gmail.com"
            age: { gt: 40} 
        }
    })

    console.log(user)
}

main().catch(e => {
    console.error(e.message)
}).finally(async() => {
    prisma.$disconnect
})