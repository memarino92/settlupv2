import { MetaTags } from '@redwoodjs/web'
import UsersCell from 'src/components/UsersCell'

const AdminPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <MetaTags title="Admin" description="Admin page" />
      <h1 className="text-2xl">Admin Page</h1>
      All users:
      <UsersCell />
    </div>
  )
}

export default AdminPage
