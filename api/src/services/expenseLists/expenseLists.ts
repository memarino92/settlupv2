import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import { requireAuth } from 'src/lib/auth'

import { db } from 'src/lib/db'

export const expenseLists = ({ tabId }) => {
  requireAuth({ roles: [] })
  return db.expenseList.findMany({
    where: { tabId },
  })
}

export const expenseList = ({ id }: Prisma.ExpenseListWhereUniqueInput) => {
  requireAuth({ roles: [] })
  return db.expenseList.findUnique({
    where: { id },
  })
}

export const createExpenseList = (data) => {
  return db.expenseList.create({
    data: data,
  })
}

export const ExpenseList = {
  expenses: (_obj, { root }: ResolverArgs<ReturnType<typeof expenseList>>) =>
    db.expenseList.findUnique({ where: { id: root.id } }).expenses(),
  tab: (_obj, { root }: ResolverArgs<ReturnType<typeof expenseList>>) =>
    db.expenseList.findUnique({ where: { id: root.id } }).tab(),
  user: (_obj, { root }: ResolverArgs<ReturnType<typeof expenseList>>) =>
    db.expenseList.findUnique({ where: { id: root.id } }).user(),
}
