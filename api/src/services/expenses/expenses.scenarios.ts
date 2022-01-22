import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.ExpenseCreateArgs>({
  expense: {
    one: {
      data: {
        amount: 4510757.718172682,
        expenseList: {
          create: {
            tab: { create: {} },
            user: {
              create: {
                email: 'String410297',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        amount: 1070677.1296775774,
        expenseList: {
          create: {
            tab: { create: {} },
            user: {
              create: {
                email: 'String9654490',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
