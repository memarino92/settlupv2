import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import TabsCell from 'src/components/TabsCell'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {isAuthenticated && <TabsCell />}
    </>
  )
}

export default HomePage
