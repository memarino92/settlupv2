import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import {
  Form,
  FieldError,
  Label,
  Submit,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { QUERY as TabsQuery } from 'src/components/TabsCell'

const CREATE_EXPENSE_MUTATION = gql`
  mutation CreateExpenseMutation($input: CreateExpenseInput!) {
    createExpense(input: $input) {
      id
    }
  }
`

const ExpenseForm = ({ expenseListId }) => {
  const formMethods = useForm()

  const [createExpense] = useMutation(CREATE_EXPENSE_MUTATION, {
    refetchQueries: [TabsQuery],
    onCompleted: () => {
      toast.success('Expense created')
      formMethods.reset()
      formMethods.setFocus('name')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSubmit = (input) => {
    input.amount = +input.amount
    createExpense({
      variables: { input: { expenseListId, ...input } },
      optimisticResponse: {
        createExpense: {
          id: 'temp-id',
          __typename: 'Todo',
          expenseListId: expenseListId,
          ...input,
        },
      },
    })
  }

  return (
    <div className="flex flex-nowrap w-full">
      <Form onSubmit={onSubmit} className="" formMethods={formMethods}>
        <div className="flex flex-nowrap items-center w-full">
          <div className="w-3/5 px-3 mb-6">
            <Label
              name="Name"
              className="label"
              errorClassName="text-red-500 text-sm font-bold"
            >
              Name
            </Label>
            <TextField
              name="name"
              validation={{ required: true }}
              className="input input-bordered w-full"
              errorClassName="input input-error w-full focus:outline-none focus:shadow-outline"
            />
            <FieldError name="name" className="text-red-500 text-xs italic" />
          </div>
          <div className="w-1/5 px-3 mb-6">
            <Label
              name="Amount"
              className="label"
              errorClassName="text-red-500 text-sm font-bold"
            >
              Amount
            </Label>
            <TextField
              name="amount"
              validation={{ required: true }}
              className="input input-bordered w-full focus:outline-none focus:shadow-outline"
              errorClassName="input input-error w-full focus:outline-none focus:shadow-outline"
            />
            <FieldError name="amount" className="text-red-500 text-xs italic" />
          </div>
          <div className="flex flex-col justify-end w-1/5 px-3 mb-6 self-stretch">
            <Submit className="inline-flex items-center btn btn-primary text-4xl font-extrabold text">
              +
            </Submit>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default ExpenseForm
