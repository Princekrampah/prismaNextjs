import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if(req.method != "POST"){
        return res.status(405).json({message: "Method not allowed"})
    }

    // since we are using fetch we have to stringify the
    // data into string
    const contactData = JSON.parse(req.body)

    const savedContact = await prisma.contact.create({
        data: contactData
    })
    res.status(200).json(savedContact)
  }
  