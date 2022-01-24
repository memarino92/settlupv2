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
      <header className="navbar">
        <h1 className="navbar-start">
          <Link className="text-4xl font-bold" to={routes.home()}>
            SettlUp
          </Link>
        </h1>
        <nav className="navbar-end">
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
      <footer className="footer footer-center">
        &copy; {new Date().getFullYear()} Michael Marino
      </footer>
    </>
  )
}

export default AppLayout
