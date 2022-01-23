import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import { requireAuth } from 'src/lib/auth'

import { db } from 'src/lib/db'

export const expenses = ({ expenseListId }) => {
  requireAuth({ roles: [] })
  return db.expense.findMany({
    where: { expenseListId },
  })
}

export const expense = ({ id }: Prisma.ExpenseWhereUniqueInput) => {
  requireAuth({ roles: [] })
  return db.expense.findUnique({
    where: { id },
  })
}

export const createExpense = ({ input }) => {
  return db.expense.create({ data: input })
}

export const deleteExpense = ({ id }) => {
  return db.expense.delete({
    where: { id },
  })
}

export const Expense = {
  expenseList: (_obj, { root }: ResolverArgs<ReturnType<typeof expense>>) =>
    db.expense.findUnique({ where: { id: root.id } }).expenseList(),
}
