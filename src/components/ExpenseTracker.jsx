import { useState } from 'react';
import { addProduct } from '../API/productApi';
import './ExpenseTracker.css';

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ expense: '', amount: '' });

  const addExpense = () => {
    if (newExpense.expense.trim() === '' || newExpense.amount.trim() === '') {
      alert('Nie zostawiaj pustych pól.');
      return;
    }

    addProduct(newExpense.expense, newExpense.amount)
      .then ((response) => {
        console.log(response.data)
      }).catch(error=>{
        console.log(error)
      })
    setExpenses([...expenses, newExpense]);
    setNewExpense({ expense: '', amount: '' });
  };

  const getTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + parseFloat(expense.amount), 0).toFixed(2);
  };

  return (
    <div>
      <div>
        <label>
          Wydatek:
          <input
            type="text"
            value={newExpense.expense}
            onChange={(e) => setNewExpense({ ...newExpense, expense: e.target.value })}
          />
        </label>
        <label>
          Kwota:
          <input
            type="number"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
          />
        </label>
        <button onClick={addExpense}>Dodaj wydatek</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Wydatek</th>
            <th>Kwota</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td>{expense.expense}</td>
              <td>{expense.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        Suma wydatków: {getTotalExpenses()}
      </div>
    </div>
  );
}

export default ExpenseTracker;
