import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExpensePage from './ExpensePage';
import IncomePage from './IncomePage';
import ShoppingList from './ShoppingList';
import StartPage from './StartPage';

import "./App.css";

function App() {
  return (
    
    <Router>
      <div className='app'>
        <Navbar />

        <Routes>
          <Route path="/ExpensePage" element={<ExpensePage />} />
          <Route path="/IncomePage" element={<IncomePage />} />
          <Route path="/ShoppingList" element={<ShoppingList />} />
          <Route path="/StartPage" element={<StartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
