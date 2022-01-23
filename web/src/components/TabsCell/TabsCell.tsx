import Tab from 'src/components/Tab'
import type { TabsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

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
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ tabs }: CellSuccessProps<TabsQuery>) => {
  return (
    <ul>
      {tabs.map((tab) => {
        return <Tab key={tab.id} tab={tab} />
      })}
    </ul>
  )
}
