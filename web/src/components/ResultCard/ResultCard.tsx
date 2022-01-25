const ResultCard = ({
  totalOne,
  totalTwo,
  expenseListOneName,
  expenseListTwoName,
}) => {
  return (
    <div className="stats mb-8  drop-shadow-xl">
      <div className="stat bg-primary text-center">
        <h2 className="prose text-neutral-content stat-value">SettlUp!</h2>
        {totalOne < totalTwo ? (
          <>
            <p className="prose text-neutral-content stat-value">
              {expenseListOneName} &rarr; {expenseListTwoName}
              <br />$
              {((totalTwo - totalOne) / 2).toLocaleString('en-US', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </>
        ) : (
          <>
            <p className="prose text-neutral-content stat-value">
              {expenseListOneName} &larr; {expenseListTwoName}
              <br />$
              {((totalOne - totalTwo) / 2).toLocaleString('en-US', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2,
              })}
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default ResultCard
