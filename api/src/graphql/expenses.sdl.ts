export const schema = gql`
  type Expense {
    id: String!
    name: String
    amount: Float!
    createdAt: DateTime!
    expenseList: ExpenseList!
    expenseListId: String!
    isSettled: Boolean!
  }

  type Query {
    expenses(expenseListId: String!): [Expense!]! @requireAuth
    expense(id: String!): Expense @requireAuth
  }

  input CreateExpenseInput {
    name: String
    amount: Float!
    expenseListId: String!
  }

  input UpdateExpenseInput {
    name: String
    amount: Float
    expenseListId: String
  }

  type Mutation {
    createExpense(input: CreateExpenseInput!): Expense! @requireAuth
    deleteExpense(id: String!): Expense! @requireAuth
  }
`
