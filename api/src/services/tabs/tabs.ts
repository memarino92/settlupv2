import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'

export const tabs = () => {
  return db.tab.findMany()
}

export const tab = ({ id }: Prisma.TabWhereUniqueInput) => {
  return db.tab.findUnique({
    where: { id },
  })
}

export const Tab = {
  expenseLists: (_obj, { root }: ResolverArgs<ReturnType<typeof tab>>) =>
    db.tab.findUnique({ where: { id: root.id } }).expenseLists(),
  users: (_obj, { root }: ResolverArgs<ReturnType<typeof tab>>) =>
    db.tab.findUnique({ where: { id: root.id } }).users(),
}
