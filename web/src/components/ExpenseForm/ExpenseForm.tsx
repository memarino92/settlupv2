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
    createExpense({ variables: { input: { expenseListId, ...input } } })
  }

  return (
    <div className="w-full max-w-full">
      <Form
        onSubmit={onSubmit}
        className="flex flex-nowrap align-middle justify-evenly px-2 p-2 mb-4"
        formMethods={formMethods}
      >
        <div className="m-2 w-2/4">
          <Label
            name="Name"
            className="block text-gray-700 text-sm font-bold mb-2"
            errorClassName="text-red-500 text-sm font-bold"
          >
            Name
          </Label>
          <TextField
            name="name"
            validation={{ required: true }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            errorClassName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FieldError name="name" className="text-red-500 text-xs italic" />
        </div>
        <div className="m-2 w-1/4">
          <Label
            name="Amount"
            className="block text-gray-700 text-sm font-bold mb-2"
            errorClassName="text-red-500 text-sm font-bold"
          >
            Amount
          </Label>
          <TextField
            name="amount"
            validation={{ required: true }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            errorClassName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FieldError name="amount" className="text-red-500 text-xs italic" />
        </div>
        <Submit className="bg-white text-blue-500 text-4xl font-bold  border border-blue-500 rounded-full hover:text-white hover:bg-blue-500">
          +
        </Submit>
      </Form>
    </div>
  )
}

export default ExpenseForm
