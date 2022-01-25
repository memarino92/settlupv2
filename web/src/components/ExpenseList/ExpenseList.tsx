import Expense from 'src/components/Expense/Expense'

const ExpenseList = ({ expenseList }) => {
  const { expenses } = expenseList
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-zebra">
        <thead className="text-center">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, i) => {
            return <Expense key={expense.id} index={i} expense={expense} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ExpenseList
