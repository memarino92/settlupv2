import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import { requireAuth } from 'src/lib/auth'

import { db } from 'src/lib/db'

export const tabs = () => {
  requireAuth({ roles: 'user' })
  const currentUserId = context.currentUser.id
  return db.tab.findMany({
    where: { users: { some: { id: currentUserId } } },
  })
}

export const tab = ({ id }: Prisma.TabWhereUniqueInput) => {
  return db.tab.findUnique({
    where: { id },
  })
}

export const createTab = ({ input }) => {
  const currentUserId = context.currentUser.id
  const { name, expenseListOneName, expenseListTwoName } = input
  return db.tab.create({
    data: {
      name: name,
      users: {
        connect: {
          id: currentUserId,
        },
      },
      expenseLists: {
        createMany: {
          data: [
            { userId: currentUserId, name: expenseListOneName },
            { userId: currentUserId, name: expenseListTwoName },
          ],
        },
      },
    },
  })
}

export const markTabAsSettled = ({ input }) => {
  db.expense.updateMany({
    where: {
      isSettled: false,
      AND: {
        expenseList: {
          tab: {
            id: {
              equals: input.id
            }
          }
        }
      }
    },

    data: {
      isSettled: true,
    },
  })

  return db.tab.findUnique({
    where: {
      id: input.id,
    },
  })
}

export const Tab = {
  expenseLists: (_obj, { root }: ResolverArgs<ReturnType<typeof tab>>) =>
    db.tab.findUnique({ where: { id: root.id } }).expenseLists(),
  users: (_obj, { root }: ResolverArgs<ReturnType<typeof tab>>) =>
    db.tab.findUnique({ where: { id: root.id } }).users(),
}
