import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseListCreateArgs>({
  expenseList: {
    one: {
      data: {
        tab: { create: {} },
        user: {
          create: {
            email: 'String5198790',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        tab: { create: {} },
        user: {
          create: {
            email: 'String7500382',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
