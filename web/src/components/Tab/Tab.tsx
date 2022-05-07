import ListCard from '../ListCard/ListCard'
import ResultCard from '../ResultCard/ResultCard'
import { useMutation } from '@redwoodjs/web'

const MARK_TAB_AS_SETTLED = gql`
  mutation MarkTabAsSettledMutaion($input: MarkTabAsSettledInput!) {
    markTabAsSettled(input: $input) {
      count
    }
  }
`

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

  const [markTabAsSettled] = useMutation(MARK_TAB_AS_SETTLED)

  const handleMarkTabAsSettled = () => {
    markTabAsSettled({
      variables: {
        input: {
          id: tab.id,
        },
      },
    })
  }

  return (
    <div className="card flex justify-center items-center p-4">
      <div className="card-title m-4">
        <h2 className="prose text-2xl">{tab.name}</h2>
      </div>

      <div className="flex w-100 justify-center align-middle">
        <ListCard expenseList={expenseLists[0]} total={totalOne} />
        <ListCard expenseList={expenseLists[1]} total={totalTwo} />
      </div>
      <div className="flex flex-col w-100 justify-center align-middle">
        <ResultCard
          totalOne={totalOne}
          totalTwo={totalTwo}
          expenseListOneName={expenseLists[0].name}
          expenseListTwoName={expenseLists[1].name}
        />
        <button className='btn btn-secondary' onClick={handleMarkTabAsSettled}>Mark as Settled</button>
      </div>
    </div>
  )
}

export default Tab
