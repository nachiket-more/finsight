import { useState, useEffect } from 'react';
import { getSummaryTotal, getSummaryCategory } from '../api/expenses.js';

export default function ExpenseSummary({ expenseSummary }: { expenseSummary: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="rounded-lg border bg-white text-gray-900 shadow-sm">
        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight text-sm font-medium">Total Expenses</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-gray-500"
          >
            <path d="M12 2v20m9-9H3"></path>
          </svg>
        </div>
        <div className="p-6 pt-0">
          <div className="text-2xl font-bold">${expenseSummary.totalExpenses}</div>
          <p className="text-xs text-gray-500 text-gray-600">Across all categories</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white text-gray-900 shadow-sm">
        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight text-sm font-medium">Top Category</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-gray-500"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div className="p-6 pt-0">
          <div className="text-2xl font-bold">{expenseSummary.topCategory}</div>
          <p className="text-xs text-gray-500">${expenseSummary.topCategoryAmount} spent</p>
        </div>
      </div>

      <div className="rounded-lg border bg-white text-gray-900 shadow-sm">
        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight text-sm font-medium">{expenseSummary.currentMonth}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-4 w-4 text-gray-500"
          >
            <path d="M8 2v4"></path>
            <path d="M16 2v4"></path>
            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
            <path d="M3 10h18"></path>
          </svg>
        </div>
        <div className="p-6 pt-0">
          <div className="text-2xl font-bold">${expenseSummary.currentMonthTotal.toFixed(2)}</div>
          <p className="text-xs text-gray-500">This month's total</p>
        </div>
      </div>
    </div>
  );
}
