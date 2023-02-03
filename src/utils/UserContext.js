import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Dummy',
    email: 'dummy@gmail.com',
  },
});

// display name for debugging using react dev tools
UserContext.displayName = 'UserContext';
export default UserContext;
