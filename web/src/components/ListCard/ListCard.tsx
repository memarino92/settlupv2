import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseList from '../ExpenseList/ExpenseList'

const ListCard = ({ expenseList, total }) => {
  return (
    <div className="bg-white shadow-md rounded px-2 p-2 m-4 max-w-md">
      <h2 className="text-xl">{expenseList.name}</h2>
      <ExpenseForm expenseListId={expenseList.id} />
      <ExpenseList expenseList={expenseList} />
      <div>
        <h2>
          Total: $
          {total.toLocaleString('en-US', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
          })}
        </h2>
      </div>
    </div>
  )
}

export default ListCard
