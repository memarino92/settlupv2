import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const expenseLists = () => {
  return db.expenseList.findMany()
}

export const expenseList = ({ id }: Prisma.ExpenseListWhereUniqueInput) => {
  return db.expenseList.findUnique({
    where: { id },
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
