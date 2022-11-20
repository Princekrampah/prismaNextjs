import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const date = new Date()
  
  // add user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Helena Tee",
  //     email: "helenatee@gmail.com",
  //     age: 32
  //   },
  //   select: {
  //     id: true,
  //     name: true,
  //     email: true,
  //   }
  // })

  // const userProfile = await prisma.user.update({
  //   where: {
  //     id: user.id
  //   },
  //   data: {
  //     profile: {
  //       create: {
  //         profilePic: "https://pixabay.com/vectors/avatar-business-comic-characters-1300331/",
  //         location: "New your",
  //         joinDate: new Date
  //       }
  //     }
  //   }
  // })

  // const AddUserProfile = await prisma.profile.create({
  //   data: {
  //     userId: "e832ded4-66c2-411d-8bf2-34b5d0717103",
  //     profilePic: "https://pixabay.com/vectors/avatar-business-comic-characters-1300331/",
  //     location: "Nairobi",
  //     joinDate: new Date
  //   }
  // })


  
  // adding multiple users >> create many is not supported for SQLite
  // const users = await prisma.user.creteMany({
  //   data: [
  //     {name: "John Doe", email: "johndoe@gmail.com", profile:  {
  //       create: {
  //         profilePic: "https://pixabay.com/vectors/avatar-business-comic-characters-1300331/",
  //         location: "Nairobi",
  //         joinDate: String(date)
  //       }
  //     }},
  //     {name: "John Doe", email: "johndoe@gmail.com", profile:  {
  //       create: {
  //         profilePic: "https://pixabay.com/vectors/avatar-business-comic-characters-1300331/",
  //         location: "New York",
  //         joinDate: String(date)
  //       }
  //     }},
  //     {name: "John Doe", email: "johndoe@gmail.com", profile:  {
  //       create: {
  //         profilePic: "https://pixabay.com/vectors/avatar-business-comic-characters-1300331/",
  //         location: "Dar es salaam",
  //         joinDate: String(date)
  //       }
  //     }}
  //   ]
  // })

  // console log created user
  // console.log(user)


  // create posts
  // const post = await prisma.post.create({
  //   data: {
  //     title: "Fist post yess... title",
  //     content: "This is the first post content....",
  //     authorId: "bb50b200-215c-4cfc-901d-eed784338ae2",
  //     published: true
  //   },
  //   select: {
  //     id: true,
  //     title: true,
  //     published: true,
  //     created: true,
  //     authorId: true
  //   }
  // })

  // console.log(post)

  // add nationality
  // const nationality = await prisma.nationality.create({
  //   data: {
  //       name: "US",
  //   },
  //   select: {
  //     name: true,
  //     id: true
  //   }
  // })

  // console.log(nationality)

  // ////////// Filtering ////////////////////////////////////

  ////////////////// findMany users /////////////////////////////
  // const users = await prisma.user.findMany()
  // console.log(users)

  ///////////////// findUnique user only on unique fields ////////////////////
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "johndoe@gmail.com"
  //   }
  // })
  // console.log(user)


  //////////////// findFirst >> returns only the first match /////////////////
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "John Doe"
  //   },
  //   select: {
  //     name: true,
  //     nationality: true
  //   }
  // })
  // const user = await prisma.profile.findFirst({
  //   where: {
  //     location: "Nairobi"
  //   },
  //   select: {
  //     id: true,
  //     location: true,
  //     joinDate: true
  //   }
  // })
  // console.log(user)

  /////////////////// findMany //////////////////////////////
  // const users = await prisma.profile.findMany({
  //   where: {
  //     location: "Nairobi"
  //   },
  //   select: {
  //     id: true,
  //     location: true,
  //     joinDate: true
  //   },
  //   orderBy: {
  //     joinDate: "asc"
  //   },
  //   // skip: 2,
  //   // take: 2,
  // })
  // console.log(users)

  // const users = await prisma.profile.findMany({
  //   select: {
  //     id: true,
  //     location: true,
  //     joinDate: true
  //   },
  //   orderBy: {
  //     joinDate: "asc"
  //   },
  //   // skip: 2,
  //   // take: 2,
  //   distinct: ["location"]
  // })
  // console.log(users)



  ////////////////// Advanced filtering ///////////////////////////
  // const users = await prisma.user.findMany({
  //   where: {
  //     name: {contains: "John"}
  //     name: { startsWith: "J" }
  //     name: { endsWith: "e" }

  //     name: { equals: "John Doe" }
  //     name: { not: "John Doe" }
  //     name: { in: ["John Doe", "Janet Doe"] }
  //     name: { notIn: ["John Doe", "Janet Doe"] }

  //     AND: [
  //       { name: { contains: "John" } },
  //       { email: { contains: "test.com" } }
  //     ]

  //     NOT: [
  //       { name: { contains: "John" } },
  //       { email: { contains: "gmail.com" } }
  //     ]

  //     age: { gt: 20 }
  //     age: { lt: 30 }
  //     age: { gte: 30 }


  //   }
  // })
  // console.log(users)


    /////////////////// Relationship Query /////////////////////
    // const userRel = await prisma.user.findMany({
    //   where: {
    //     profile: {
    //       location: "Nairobi"
    //     }
    //   },
    //   select: {
    //     id: true,
    //     profile: true
    //   }
    // })
    // console.log(userRel)

    // const userRel = await prisma.user.findMany({
    //   where: {
    //    posts: {
    //     none: {
    //       title: { contains: "First" }
    //     }
    //    }
    //   },
    //   select: {
    //     id: true,
    //     profile: true,
    //     posts: true
    //   }
    // })
    // console.log(userRel)

    // const userRel = await prisma.post.findMany({
    //   where: {
    //     author: {
    //       is: {
    //         age: { gt: 24 }
    //       }
    //     }
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     created: true,
    //     author: true
    //   }
    // })
    // console.log(userRel)

    // const userRel = await prisma.post.findMany({
    //   where: {
    //     author: {
    //       isNot: {
    //         age: { gt: 24 }
    //       }
    //     }
    //   },
    //   select: {
    //     id: true,
    //     title: true,
    //     created: true,
    //     author: true
    //   }
    // })
    // console.log(userRel)


    ///////////////// Update queries //////////////////////////
    // the fields that matchs the query
    // const count = await prisma.user.updateMany({
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
    // console.log(count)

  //   const count = await prisma.user.updateMany({
  //     data: {
  //         age: {
  //             increment: 1
  //         }
  //     },
  //     where: {
  //         age: { gt: 30}
  //     }
  // })
  // console.log(count)

  // const users = await prisma.user.findMany();
  // console.log(users)


  // const user = await prisma.user.update({
  //   where: {
  //     email: "johndoe@gmail.com"
  //   },
  //   data: {
  //     email: "JohnDoe@gmail.com"
  //   }
  // })
  // console.log(user)

  /////////////////////// delete Queries ////////////////////
  // const count = await prisma.nationality.deleteMany({
  //   where: {
  //       name: "Kenya"
  //   }
  // })
  // console.log(count)

// delete all nationalities
// await prisma.nationality.deleteMany()



  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })