import type { UsersQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import UserSummary from '../UserSummary/UserSummary'

export const QUERY = gql`
  query UsersQuery {
    users {
      id
      email
      roles
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }: CellSuccessProps<UsersQuery>) => {
  return (
    <div>
      <ul>
        {users.map((user) => {
          return <UserSummary key={user.id} user={user} />
        })}
      </ul>
    </div>
  )
}
