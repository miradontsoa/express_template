const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const studentData = [
  {
    firstName: 'Alice',
    lastName: 'Randria',
    email: 'alice@email.com',
  },
  {
    firstName: 'Bob',
    lastName: "Rakoto",
    email: 'bob@email.com',
  },
  {
    firstName: 'Carl',
    lastName: "Rabe",
    email: 'carl@email.com',
  },
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of studentData) {
    const student = await prisma.student.create({
      data: u,
    })
    console.log(`Created student with id: ${student.id}`)
  }
  console.log(`Seeding finished.`)
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
