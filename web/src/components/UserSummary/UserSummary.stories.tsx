import UserSummary from './UserSummary'

export const generated = () => {
  return (
    <UserSummary
      user={{
        id: 1,
        email: 'memarino92@gmail.com',
        roles: ['user', 'admin'],
        __typename: 'User',
      }}
    />
  )
}

export default { title: 'Components/UserSummary' }
