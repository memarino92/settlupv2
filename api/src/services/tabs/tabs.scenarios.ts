import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TabCreateArgs>({
  tab: {
    one: {
      data: {
        name: 'name',
        users: {
          connect: {
            id: 1,
          },
        },
        expenseLists: {
          createMany: {
            data: [
              { userId: 1, name: 'testUserOne' },
              { userId: 1, name: 'testUserTwo' },
            ],
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
