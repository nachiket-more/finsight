import React, { useState } from 'react';
import { createExpense } from '../services/api';

const ExpenseForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) return alert('Please fill all fields');
    const expense = { title, amount: parseFloat(amount), category, date };
    try {
      await createExpense(expense);
      onAdd();  // notify parent to refresh
      setTitle(''); setAmount(''); setCategory(''); setDate('');
    } catch (err) {
      alert('Failed to add expense');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Amount" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
      <input placeholder="Category" value={category} onChange={e => setCategory(e.target.value)} />
      <input placeholder="Date" type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
