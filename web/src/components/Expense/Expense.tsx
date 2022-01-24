import { useMutation } from '@redwoodjs/web'
import { QUERY as TabsQuery } from 'src/components/TabsCell'

const DELETE_EXPENSE_MUTATION = gql`
  mutation DeleteExpenseMutation($id: String!) {
    deleteExpense(id: $id) {
      id
    }
  }
`

const LOCALE_CONFIG = [
  'en-US',
  {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  },
]

const Expense = ({ expense, index }) => {
  const [deleteExpense] = useMutation(DELETE_EXPENSE_MUTATION, {
    refetchQueries: [TabsQuery],
  })

  const handleClick = (id) => {
    deleteExpense({ variables: { id } })
  }

  return (
    <tr>
      <th className="text-center">{index + 1}</th>
      <td>{expense.name}</td>
      <td className="text-center">
        {`$${expense.amount.toLocaleString(...LOCALE_CONFIG)}`}
      </td>
      <td className="text-center">
        <button
          className="btn btn-xs btn-secondary btn-outline"
          onClick={() => handleClick(expense.id)}
        >
          Remove
        </button>
      </td>
    </tr>
  )
}

export default Expense
