export const schema = gql`
  type User {
    id: Int!
    email: String!
    tabs: [Tab]!
    roles: [String]!
  }

  type Query {
    users: [User!]! @requireAuth
  }

  input CreateUserInput {
    email: String!
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    email: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }
`
