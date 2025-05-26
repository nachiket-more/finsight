import { useState, useEffect } from 'react';
import { Expense } from '../types/Expense';

interface Props {
  onSubmit: (exp: Omit<Expense, 'id'>) => void;
  editingExpense: Expense | null;
}

export default function ExpenseForm({ onSubmit, editingExpense }: Props) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Food');

  // New state to hold validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount.toString());
      setDate(editingExpense.date);
      setCategory(editingExpense.category);
      setErrors({});
    }
  }, [editingExpense]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) newErrors.title = 'Title is required.';
    if (!amount || isNaN(Number(amount)) || Number(amount) <= 0)
      newErrors.amount = 'Enter a valid amount greater than 0.';
    if (!date) newErrors.date = 'Date is required.';
    if (!category.trim()) newErrors.category = 'Category is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    onSubmit({
      title,
      amount: parseFloat(amount),
      date,
      category: category as Expense['category'],
    });

    setTitle('');
    setAmount('');
    setDate('');
    setCategory('Food');
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form rounded-md bg-white p-6 shadow space-y-4 mb-8">
      <h2 className="text-2xl font-semibold">{editingExpense ? 'Edit Expense' : 'Add New Expense'}</h2>
      <div className="grid grid-cols-2 gap-4">
        <label className="block font-semibold text-sm">
          <span className="mb-2 block">Title</span>
          <input
            className={`rounded-md w-full border mt-2 py-2 px-3 font-normal ${errors.title ? 'border-red-500' : ''}`}
            placeholder="Enter expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-600 text-xs mt-1">{errors.title}</p>}
        </label>

        <label className="block font-semibold text-sm">
          <span className="mb-2 block">Amount</span>
          <input
            className={`rounded-md w-full border mt-2 py-2 px-3 font-normal ${errors.amount ? 'border-red-500' : ''}`}
            type="number"
            step="0.01"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          {errors.amount && <p className="text-red-600 text-xs mt-1">{errors.amount}</p>}
        </label>

        <label className="block font-semibold text-sm">
          <span className="mb-2 block">Date</span>
          <input
            className={`rounded-md w-full border mt-2 py-2 px-3 font-normal ${errors.date ? 'border-red-500' : ''}`}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          {errors.date && <p className="text-red-600 text-xs mt-1">{errors.date}</p>}
        </label>

        <label className="block font-semibold text-sm">
          <span className="mb-2 block">Category</span>
          <select
            className={`w-full border rounded-md py-2 px-3 font-normal ${errors.category ? 'border-red-500' : ''}`}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Food</option>
            <option>Travel</option>
            <option>Utilities</option>
            <option>Others</option>
          </select>
          {errors.category && <p className="text-red-600 text-xs mt-1">{errors.category}</p>}
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          style={{ backgroundColor: '#0F172A' }}
          className="text-white text-sm font-semibold px-4 py-2 rounded-md"
        >
          {editingExpense ? 'Update Expense' : 'Add Expense'}
        </button>
      </div>
    </form>
  );
}
