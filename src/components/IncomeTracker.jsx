import { useState } from 'react';
import './ExpenseTracker.css';

function IncomeTracker() {
  const [incomes, setIncomes] = useState([]);
  const [newIncome, setNewIncome] = useState({ income: '', amount: '' });

  const addIncome = () => {
    if (newIncome.income.trim() === '' || newIncome.amount.trim() === '') {
      alert('Nie zostawiaj pustych pól.');
      return;
    }

    setIncomes([...incomes, newIncome]);
    setNewIncome({ income: '', amount: '' });
  };

  const getTotalIncomes = () => {
    return incomes.reduce((total, income) => total + parseFloat(income.amount), 0).toFixed(2);
  };

  return (
    <div>
      <div>
        <label>
          Przychód:
          <input
            type="text"
            value={newIncome.income}
            onChange={(e) => setNewIncome({ ...newIncome, income: e.target.value })}
          />
        </label>
        <label>
          Kwota:
          <input
            type="number"
            value={newIncome.amount}
            onChange={(e) => setNewIncome({ ...newIncome, amount: e.target.value })}
          />
        </label>
        <button onClick={addIncome}>Dodaj przychód</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Przychód</th>
            <th>Kwota</th>
          </tr>
        </thead>
        <tbody>
          {incomes.map((income, index) => (
            <tr key={index}>
              <td>{income.income}</td>
              <td>{income.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        Suma przychodów: {getTotalIncomes()}
      </div>
    </div>
  );
}

export default IncomeTracker;
