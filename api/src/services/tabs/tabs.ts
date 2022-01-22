import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import { requireAuth } from 'src/lib/auth'

import { db } from 'src/lib/db'

export const tabs = () => {
  // requireAuth({ roles: [] })
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

export const Tab = {
  expenseLists: (_obj, { root }: ResolverArgs<ReturnType<typeof tab>>) =>
    db.tab.findUnique({ where: { id: root.id } }).expenseLists(),
  users: (_obj, { root }: ResolverArgs<ReturnType<typeof tab>>) =>
    db.tab.findUnique({ where: { id: root.id } }).users(),
}
