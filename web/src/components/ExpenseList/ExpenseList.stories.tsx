import ExpenseList from './ExpenseList'

export const generated = () => {
  return (
    <ExpenseList
      expenseList={[
        {
          id: 'ckvueaz1n0002gsta8pe13mk9',
          name: 'Groceries',
          amount: 80,
          createdAt: '2021-11-11T03:32:26.219Z',
        },
        {
          id: 'ckvuebiz90011gstalnlmgbhu',
          name: 'Weed',
          amount: 100,
          createdAt: '2021-11-11T03:32:52.053Z',
        },
        {
          id: 'ckvuebugp0020gstacm53wv6n',
          name: 'Uber Eats',
          amount: 57.24,
          createdAt: '2021-11-11T03:33:06.937Z',
        },
        {
          id: 'ckvued1hk0029gsta2hkrd4tp',
          name: 'Scotch',
          amount: 86.2,
          createdAt: '2021-11-11T03:34:02.696Z',
        },
        {
          id: 'ckvuedsr40038gsta0ygvz4vj',
          name: 'Burgers',
          amount: 36.4,
          createdAt: '2021-11-11T03:34:38.032Z',
        },
      ]}
    />
  )
}

export default { title: 'Components/ExpenseList' }
