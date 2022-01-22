import ListCard from '../ListCard/ListCard'
import ResultCard from '../ResultCard/ResultCard'

const Tab = ({ tab }) => {
  const { expenseLists } = tab
  const totalOne = expenseLists[0].expenses.reduce((a, b) => a + b.amount, 0)
  const totalTwo = expenseLists[1].expenses.reduce((a, b) => a + b.amount, 0)
  return (
    <div>
      <div className="flex w-100 justify-center align-middle">
        <ListCard expenseList={expenseLists[0]} total={totalOne} />
        <ListCard expenseList={expenseLists[1]} total={totalTwo} />
      </div>
      <div className="flex w-100 justify-center align-middle">
        <ResultCard totalOne={totalOne} totalTwo={totalTwo} />
      </div>
    </div>
  )
}

export default Tab
