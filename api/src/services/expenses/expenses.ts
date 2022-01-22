import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const expenses = ({ expenseListId }) => {
  return db.expense.findMany({
    where: { expenseListId },
  })
}

export const expense = ({ id }: Prisma.ExpenseWhereUniqueInput) => {
  return db.expense.findUnique({
    where: { id },
  })
}

export const Expense = {
  expenseList: (_obj, { root }: ResolverArgs<ReturnType<typeof expense>>) =>
    db.expense.findUnique({ where: { id: root.id } }).expenseList(),
}
