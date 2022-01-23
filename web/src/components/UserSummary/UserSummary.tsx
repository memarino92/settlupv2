const UserSummary = ({ user }) => {
  return (
    <div className="mt-1 flex flex-row justify-between relative bg-gray-200 p-2 rounded-lg w-full">
      <p>{user.email} </p>
      <p>{`Id: ${user.id} `}</p>
      <p>{`Roles: ${user.roles}`}</p>
    </div>
  )
}

export default UserSummary
