import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'
import { requireAuth } from 'src/lib/auth'

import { db } from 'src/lib/db'

export const users = () => {
  requireAuth({ roles: 'admin' })
  return db.user.findMany()
}

export const user = ({ id }: Prisma.UserWhereUniqueInput) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const User = {
  tabs: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).tabs(),
  expenseLists: (_obj, { root }: ResolverArgs<ReturnType<typeof user>>) =>
    db.user.findUnique({ where: { id: root.id } }).expenseLists(),
}
