import ListCard from '../ListCard/ListCard'
import ResultCard from '../ResultCard/ResultCard'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { QUERY as TabsQuery } from '../TabsCell/TabsCell'

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

  const [markTabAsSettled] = useMutation(MARK_TAB_AS_SETTLED, {
    refetchQueries: [TabsQuery],
    onCompleted: () => {
      toast.success('Tab Marked as Settled')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleMarkTabAsSettled = () => {
    markTabAsSettled({
      variables: {
        input: {
          id: tab.id,
        },
      },
    })
  }

  return (<>
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
        <label htmlFor="confirmation-modal" className="btn btn-secondary modal-button">Mark as Settled</label>
      </div>
    </div>

<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Really mark tab as settled?</h3>
    <p className="py-4">This action can not be undone!</p>
    <div className="modal-action">
      <label htmlFor="confirmation-modal" className="btn btn-secondary">No, nevermind</label>
      <label htmlFor="confirmation-modal" className="btn btn-secondary" onClick={handleMarkTabAsSettled}>Yes, really mark tab as settled</label>
    </div>
  </div>
</div>
</>
)
}

export default Tab
