import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseList from '../ExpenseList/ExpenseList'

const ListCard = ({ expenseList, total }) => {
  return (
    <div className="card card-bordered flex justify-center items-center m-4 p-4 shadow-xl">
      <h2 className="card-title">{expenseList.name}</h2>
      <div className="card-body">
        <ExpenseForm expenseListId={expenseList.id} />
        <ExpenseList expenseList={expenseList} />
        <div>
          <h2 className="prose prose-xl mt-4 text-center">
            Total: $
            {total.toLocaleString('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ListCard
