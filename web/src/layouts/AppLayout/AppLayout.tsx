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
      <header className="navbar bg-primary text-neutral-content rounded-b">
        <h1 className="prose prose-a:no-underline navbar-start">
          <Link className="text-4xl font-bold" to={routes.home()}>
            SettlUp
          </Link>
        </h1>
        <nav className="flex navbar-end">
          {hasRole('admin') && (
            <button className="btn btn-secondary m-4">
              <Link to={routes.admin()}>Admin Page</Link>
            </button>
          )}
          {!isAuthenticated && (
            <button className="btn">
              <Link to={routes.login()}>Log In</Link>
            </button>
          )}
          {isAuthenticated && (
            <button className="btn btn-secondary" onClick={logOut}>
              Log Out
            </button>
          )}
          {isAuthenticated && <p className="prose m-4">{currentUser.email}</p>}
        </nav>
      </header>
      {children}
      <footer className="footer footer-center bg-primary text-neutral-content rounded-t">
        &copy; {new Date().getFullYear()} Michael Marino <br />
        <a href="https://github.com/memarino92/settlupv2">
          View the Source on GitHub
        </a>
      </footer>
    </>
  )
}

export default AppLayout
