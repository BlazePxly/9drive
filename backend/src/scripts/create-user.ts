import { prisma } from '../config/prisma.js'
import { hashPassword } from '../utils/password.js'

async function createUser() {
  const name = process.argv[2]
  const email = process.argv[3]
  const password = process.argv[4]

  if (!name || !email || !password) {
    console.error('Usage: npm run create-user "<name>" "<email>" "<password>"')
    process.exit(1)
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email } })
    if (existing) {
      console.error('Error: Email already registered.')
      process.exit(1)
    }

    const passwordHash = await hashPassword(password)
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    })
    console.log('✅ User created successfully!')
    console.log(`ID: ${user.id}`)
    console.log(`Email: ${user.email}`)
  } catch (error) {
    console.error('Failed to create user:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

createUser()
