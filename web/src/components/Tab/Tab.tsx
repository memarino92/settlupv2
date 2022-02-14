import ListCard from '../ListCard/ListCard'
import ResultCard from '../ResultCard/ResultCard'

const Tab = ({ tab }) => {
  const { expenseLists } = tab
  const totalOne = expenseLists[0]
    ? expenseLists[0].expenses.reduce(
        (a, b) => a + (b.isSettled ? 0 : b.amount),
        0
      )
    : 0
  const totalTwo = expenseLists[1]
    ? expenseLists[1].expenses.reduce(
        (a, b) => a + (b.isSettled ? 0 : b.amount),
        0
      )
    : 0
  return (
    <div className="card flex justify-center items-center p-4">
      <div className="card-title m-4">
        <h2 className="prose text-2xl">{tab.name}</h2>
      </div>

      <div className="flex w-100 justify-center align-middle">
        <ListCard expenseList={expenseLists[0]} total={totalOne} />
        <ListCard expenseList={expenseLists[1]} total={totalTwo} />
      </div>
      <div className="flex w-100 justify-center align-middle">
        <ResultCard
          totalOne={totalOne}
          totalTwo={totalTwo}
          expenseListOneName={expenseLists[0].name}
          expenseListTwoName={expenseLists[1].name}
        />
      </div>
    </div>
  )
}

export default Tab
