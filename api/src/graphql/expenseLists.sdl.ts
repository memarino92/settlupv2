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
    expenseLists: [ExpenseList!]! @requireAuth
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
`
