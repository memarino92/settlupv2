export const schema = gql`
  type Tab {
    id: String!
    createdAt: DateTime!
    name: String
    expenseLists: [ExpenseList]!
    users: [User]!
  }

  type Query {
    tabs: [Tab!]! @requireAuth
    tab(id: String!): Tab @requireAuth
  }

  input CreateTabInput {
    name: String!
    expenseListOneName: String!
    expenseListTwoName: String!
  }

  input UpdateTabInput {
    name: String
  }

  type Mutation {
    createTab(input: CreateTabInput): Tab! @requireAuth
  }
`
