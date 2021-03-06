import Tab from 'src/components/Tab'
import type { TabsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TabForm from '../TabForm/TabForm'
import { useAuth } from '@redwoodjs/auth'

export const QUERY = gql`
  query TabsQuery {
    tabs {
      id
      name
      expenseLists {
        id
        name
        expenses {
          id
          name
          amount
          isSettled
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <div>
    <TabForm />
  </div>
)

export const Failure = ({ error }: CellFailureProps) => {
  const { hasRole } = useAuth()

  return (
    hasRole('user') && (
      <div style={{ color: 'red' }}>Error: {error.message}</div>
    )
  )
}

export const Success = ({ tabs }: CellSuccessProps<TabsQuery>) => {
  return (
    <ul>
      {tabs.map((tab) => {
        return <Tab key={tab.id} tab={tab} />
      })}
    </ul>
  )
}
