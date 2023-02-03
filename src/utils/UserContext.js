import { createContext } from 'react';

export default UserContext = createContext({
  user: {
    name: 'Dummy',
    email: 'dummy@gmail.com',
  },
});
