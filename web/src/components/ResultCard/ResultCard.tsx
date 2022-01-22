const ResultCard = ({ totalOne, totalTwo }) => {
  return (
    <div>
      <h2 className="text-xl">SettlUp!</h2>
      {totalOne < totalTwo ? (
        <>
          <p className="text-xl">
            1 &rarr; 2
            <br />$
            {((totalTwo - totalOne) / 2).toLocaleString('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </p>
        </>
      ) : (
        <>
          <p className="text-xl">
            1 &larr; 2
            <br />$
            {((totalOne - totalTwo) / 2).toLocaleString('en-US', {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </p>
        </>
      )}
    </div>
  )
}

export default ResultCard
