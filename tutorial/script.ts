import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const date = new Date()
  
  // add user
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Hellen Jee",
  //     email: "hellenjee@testmail.com",
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
  //         location: "Nairobi",
  //         joinDate: String(date.getDate())
  //       }
  //     }
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
  //     title: "Third post awooh title",
  //     content: "Third post content....awoooh",
  //     authorId: "8a1e2eba-f6df-4d1e-84d5-2d65aa8f56e6",
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