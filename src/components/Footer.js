import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <h4 className="m-2 p-2 border border-black">
      This site is developed by {user.name}. Email - {user.email}
    </h4>
  );
};

export default Footer;
