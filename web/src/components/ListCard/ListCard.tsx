import { useState } from 'react'
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import ExpenseList from '../ExpenseList/ExpenseList'

const ListCard = ({ expenseList, total }) => {
  const [hideSettledExpenses, setHideSettledExpenses] = useState(true)

  const handleHideSettledExpenses = () => {
    setHideSettledExpenses(!hideSettledExpenses)
  }

  return (
    <div className="card card-bordered flex justify-center items-center m-4 p-4 shadow-xl">
      <h2 className="card-title">{expenseList.name}</h2>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Hide Settled Expenses</span>
          <input
            type="checkbox"
            className="toggle toggle-primary ml-2"
            checked={hideSettledExpenses}
            onChange={handleHideSettledExpenses}
          />
        </label>
      </div>
      <div className="card-body">
        <ExpenseForm expenseListId={expenseList.id} />
        <ExpenseList
          expenseList={expenseList}
          hideSettledExpenses={hideSettledExpenses}
        />
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
