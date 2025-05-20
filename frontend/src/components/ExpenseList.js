import React, { useEffect, useState } from 'react';
import { getExpenses } from '../services/api';

const ExpenseList = ({ refreshTrigger }) => {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getExpenses()
      .then(data => {
        setExpenses(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [refreshTrigger]);

  if (loading) return <p>Loading expenses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>Expenses</h3>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            {expense.title} - ${expense.amount} - {expense.category} - {expense.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
