import { useEffect, useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import { Expense } from './types/Expense';
import ExpenseSummary from "./components/ExpenseSummary"
import ExpenseList from "./components/ExpenseList"
import { getAllExpenses, addExpense, deleteExpense, getSummaryTotal, getSummaryCategory, getSummaryMonth } from './api/expenses.js';

export default function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);
  
  const [totalExpenses, setTotalExpenses] = useState(0.00);
  const [topCategory, setTopCategory] = useState('---');
  const [topCategoryAmount, setTopCategoryAmount] = useState(0.00);
  const [currentMonth, setCurrentMonth] = useState('---');
  const [currentMonthTotal, setCurrentMonthTotal] = useState(0.0);

  const expenseSummary = {
    totalExpenses: totalExpenses,
    topCategory: topCategory,
    topCategoryAmount: topCategoryAmount,
    currentMonth: currentMonth,
    currentMonthTotal: currentMonthTotal
  };

  const getCurrentMonthYear = () => {
    const now = new Date();
    return now.toLocaleString('default', { month: 'long', year: 'numeric' });
  }

  const fetchExpenses = async () =>{
      const expenses = await getAllExpenses();
      setExpenses(expenses);
  }

  const handleSubmit = async (expense: Omit<Expense, 'id'>) => {
    if (editingExpense) {
      setExpenses(prev => prev.map(e => e.id === editingExpense.id ? { ...expense, id: editingExpense.id } : e));

      setEditingExpense(null);
    } else {
      await addExpense(expense)
      await fetchExpenses()
    }
    
    await refreshSummary()
  };

  const handleDelete = async (id: number) => {
    await deleteExpense(id)
    await fetchExpenses()
    await refreshSummary()
  };

  const refreshSummary = async () => {
      try {
        const total = await getSummaryTotal();
        setTotalExpenses(total);

        const category = await getSummaryCategory();
        setTopCategory(category[0]);
        setTopCategoryAmount(category[1]);

        setCurrentMonthTotal(await getSummaryMonth())

      } catch (err) {
        console.error(err);
      }
  }

  useEffect(() => {
    fetchExpenses()
    refreshSummary()
    setCurrentMonth(getCurrentMonthYear())
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Header />
        <ExpenseSummary  expenseSummary={expenseSummary}/>
        <ExpenseForm onSubmit={handleSubmit} editingExpense={editingExpense} />
        <ExpenseList expenses={expenses} onDelete={handleDelete} />
      </div>
    </div>
  );
}
