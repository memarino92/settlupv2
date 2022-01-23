import { MetaTags } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { logOut, isAuthenticated, currentUser, hasRole } = useAuth()
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
  You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <header className="relative flex justify-between items-center py-4 px-8 bg-blue-700 text-white">
        <h1 className="text-5xl font-semibold tracking-tight">
          <Link
            className="text-blue-400 hover:text-blue-100 transition duration-100"
            to={routes.home()}
          >
            SettlUp
          </Link>
        </h1>
        <nav>
          <ul>
            <li>
              {hasRole('admin') && (
                <button>
                  <Link to={routes.admin()}>Admin Page</Link>
                </button>
              )}
            </li>
            <li>
              {!isAuthenticated && (
                <button>
                  <Link to={routes.login()}>Log In</Link>
                </button>
              )}
              {isAuthenticated && <button onClick={logOut}>Log Out</button>}
            </li>
            {isAuthenticated && <li>{`${currentUser.email}`}</li>}
          </ul>
        </nav>
      </header>
      {children}
      <footer className="text-center pt-32 pr-8 pb-16 pl-8">
        &copy; {new Date().getFullYear()} Michael Marino
      </footer>
    </>
  )
}

export default AppLayout
