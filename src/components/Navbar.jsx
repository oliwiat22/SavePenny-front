import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  return (
    <nav>
      <Link to="/StartPage">
        <button>Strona główna </button>
      </Link>
      <Link to="/ExpensePage">
        <button>Wydatki</button>
      </Link>
      <Link to="/IncomePage">
        <button>Przychody</button>
      </Link>
      <Link to="/ShoppingList">
        <button>Lista zakupów</button>
      </Link>
    </nav>
  );
}

export default Navbar;