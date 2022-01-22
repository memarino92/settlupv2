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
  }

  input CreateTabInput {
    name: String
  }

  input UpdateTabInput {
    name: String
  }
`
