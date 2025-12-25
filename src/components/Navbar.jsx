import { useUser } from '../hooks/useUser';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const { user } = useUser();
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return `Welcome back, ${user.name}!`;
      case '/profile':
        return 'Your Profile';
      default:
        return `Welcome back, ${user.name}!`;
    }
  };

  const getPageDescription = () => {
    switch (location.pathname) {
      case '/':
        return 'Manage questions, monitor student performance, and analyze quiz data';
      case '/profile':
        return 'View and manage your profile information';
      default:
        return 'Manage questions, monitor student performance, and analyze quiz data';
    }
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-1">{getPageTitle()}</h2>
      <p className="text-gray-600">{getPageDescription()}</p>
    </div>
  );
}

export default Navbar;
