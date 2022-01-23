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

const Expense = ({ expense }) => {
  const [deleteExpense] = useMutation(DELETE_EXPENSE_MUTATION, {
    refetchQueries: [TabsQuery],
  })

  const handleClick = (id) => {
    deleteExpense({ variables: { id } })
  }

  return (
    <div className="mt-1 flex flex-row justify-between relative bg-gray-200 p-2 rounded-lg max-w-md">
      <p>
        {expense.name} - ${expense.amount.toLocaleString(...LOCALE_CONFIG)}
      </p>
      <button onClick={() => handleClick(expense.id)}>Remove</button>
    </div>
  )
}

export default Expense
