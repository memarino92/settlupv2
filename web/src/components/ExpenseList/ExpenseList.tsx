import Expense from 'src/components/Expense/Expense'

const ExpenseList = ({ expenseList }) => {
  const { expenses } = expenseList
  return (
    <div>
      {expenses.map((expense) => {
        return <Expense key={expense.id} expense={expense} />
      })}
    </div>
  )
}

export default ExpenseList
