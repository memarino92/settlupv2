import Expense from 'src/components/Expense/Expense'

const ExpenseList = ({ expenseList }) => {
  return (
    <div>
      {expenseList.map((expense) => {
        return <Expense key={expense.id} expense={expense} />
      })}
    </div>
  )
}

export default ExpenseList
