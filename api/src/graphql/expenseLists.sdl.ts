export const schema = gql`
  type ExpenseList {
    id: String!
    createdAt: DateTime!
    name: String
    expenses: [Expense]!
    tab: Tab!
    tabId: String!
    user: User!
    userId: Int!
  }

  type Query {
    expenseLists(tabId: String!): [ExpenseList!]! @requireAuth
    expenseList(id: String!): ExpenseList @requireAuth
  }

  input CreateExpenseListInput {
    name: String
    tabId: String!
    userId: Int!
  }

  input UpdateExpenseListInput {
    name: String
    tabId: String
    userId: Int
  }

  type Mutation {
    createExpenseList(input: CreateExpenseListInput!): ExpenseList! @requireAuth
  }
`
