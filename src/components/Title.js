import { Link } from 'react-router-dom';
import { APP_LOGO } from '../constants';

const Title = () => (
  <Link to="/">
    <img className="h-28 p-2" alt="logo" src={APP_LOGO} data-testid="logo" />
  </Link>
);

export default Title;
