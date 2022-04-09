// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  tabs: [{
    id: '1',
    name: 'Tab 1',
    expenseLists: [
      {
        expenses: [
          {
            id: '1',
            name: 'Expense 1',
            amount: '100',
          }
        ]
      },
      {
        expenses: [
          {
            id: '2',
            name: 'Expense 2',
            amount: '200',
          }
        ]
      }
    ]
  }],
})
