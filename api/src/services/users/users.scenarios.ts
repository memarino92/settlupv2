import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String3577900',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: { email: 'String717339', hashedPassword: 'String', salt: 'String' },
    },
  },
})

export type StandardScenario = typeof standard
