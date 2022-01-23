import { useMutation } from '@redwoodjs/web'

import {
  Form,
  FieldError,
  Label,
  Submit,
  TextField,
  useForm,
} from '@redwoodjs/forms'
import { QUERY as TabsQuery } from 'src/components/TabsCell'

const CREATE_TAB_MUTATION = gql`
  mutation CreateTabMutation($input: CreateTabInput!) {
    createTab(input: $input) {
      id
    }
  }
`

const TabForm = () => {
  const formMethods = useForm()

  const [createTab] = useMutation(CREATE_TAB_MUTATION, {
    refetchQueries: [TabsQuery],
  })

  const onSubmit = (input) => {
    createTab({ variables: { input } })
  }
  return (
    <div>
      <h2>{'No tabs yet? Create One!'}</h2>
      <Form
        onSubmit={onSubmit}
        className="flex flex-nowrap align-middle justify-evenly px-2 p-2 mb-4"
        formMethods={formMethods}
      >
        <div className="m-2">
          <Label
            name="name"
            className="block text-gray-700 text-sm font-bold mb-2"
            errorClassName="text-red-500 text-sm font-bold"
          >
            Tab Name
          </Label>
          <TextField
            name="name"
            validation={{ required: true }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            errorClassName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FieldError name="name" className="text-red-500 text-xs italic" />
        </div>
        <div className="m-2">
          <Label
            name="Expense List One Name"
            className="block text-gray-700 text-sm font-bold mb-2"
            errorClassName="text-red-500 text-sm font-bold"
          >
            Expense List One Name
          </Label>
          <TextField
            name="expenseListOneName"
            validation={{ required: true }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            errorClassName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FieldError
            name="expenseListOneName"
            className="text-red-500 text-xs italic"
          />
        </div>
        <div className="m-2">
          <Label
            name="expenseListTwoName"
            className="block text-gray-700 text-sm font-bold mb-2"
            errorClassName="text-red-500 text-sm font-bold"
          >
            Expense List Two Name
          </Label>
          <TextField
            name="expenseListTwoName"
            validation={{ required: true }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            errorClassName="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />
          <FieldError
            name="expenseListTwoName"
            className="text-red-500 text-xs italic"
          />
        </div>
        <Submit className="bg-white text-blue-500 text-4xl font-bold  border border-blue-500 rounded-full hover:text-white hover:bg-blue-500">
          Create Tab!
        </Submit>
      </Form>
    </div>
  )
}

export default TabForm
