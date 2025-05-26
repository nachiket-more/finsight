import React from "react";
import { Expense } from '../types/Expense'; // adjust path as needed

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: number) => void;  // callback to handle delete action
}

const categoryColors: Record<Expense['category'], { bg: string; text: string }> = {
  Food: { bg: 'bg-green-100', text: 'text-green-800' },
  Travel: { bg: 'bg-blue-100', text: 'text-blue-800' },
  Utilities: { bg: 'bg-yellow-100', text: 'text-yellow-800' },
  Entertainment: { bg: 'bg-red-100', text: 'text-red-800' },
  Others: { bg: 'bg-gray-100', text: 'text-gray-800' },
};

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onDelete }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm bg-white">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">Expense List</h3>
      </div>
      <div className="p-6 pt-0">
        <div className="space-y-4">
          {expenses.map((expense) => {
            const { bg, text } = categoryColors[expense.category] || categoryColors.Others;
            return (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-medium text-gray-900 truncate">{expense.title}</h4>
                    <div
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${bg} ${text}`}
                    >
                      {expense.category}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="font-semibold text-lg text-gray-900">${expense.amount}</span>
                    <span>
                      {expense.date[0]}-
                      {String(expense.date[1]).padStart(2, '0')}-
                      {String(expense.date[2]).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => onDelete(expense.id)}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:h-4 [&_svg]:w-4 [&_svg]:shrink-0 border border-input bg-background rounded-md h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                  aria-label="Delete expense"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trash2"
                  >
                    <path d="M3 6h18" />
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    <line x1="10" x2="10" y1="11" y2="17" />
                    <line x1="14" x2="14" y1="11" y2="17" />
                  </svg>
                  <span className="sr-only">Delete expense</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
