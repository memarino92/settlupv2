import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import UsersCell from 'src/components/UsersCell'

const AdminPage = () => {
  return (
    <>
      <MetaTags title="Admin" description="Admin page" />

      <h1>AdminPage</h1>
      <UsersCell />
    </>
  )
}

export default AdminPage
