import type { FindTabsCellQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindTabsCellQuery($id: Int!) {
    tabsCell: tabsCell(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ tabsCell }: CellSuccessProps<FindTabsCellQuery>) => {
  return <div>{JSON.stringify(tabsCell)}</div>
}
