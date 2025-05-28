const BASE_URL = process.env.REACT_APP_BASE_URL;


function formatMonthYear(str) {
  const [year, month] = str.split('-').map(Number);
  const date = new Date(year, month - 1);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

export async function getAllExpenses() {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) throw new Error('Failed to fetch expenses');
  const expenses = await response.json();
  return expenses.sort((a, b) => b.id - a.id);
}

export async function getSummaryTotal() {
  const response = await fetch(`${BASE_URL}/summary/total`);
  if (!response.ok) throw new Error('Failed to fetch total expenses summary');
  var res = await response.json();
  return res.total;
}

export async function getSummaryCategory() {
  const response = await fetch(`${BASE_URL}/summary/by-category`);
  if (!response.ok) throw new Error('Failed to fetch total expenses summary');
  var categories = await response.json();
  const sorted = Object.entries(categories)
  .sort((a, b) => b[1] - a[1]);

  return sorted[0];
}

export async function getSummaryMonth(){
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const currentMonth = `${year}-${month}`;
  const response = await fetch(`${BASE_URL}/summary/monthly`);
  if (!response.ok) throw new Error('Failed to fetch expenses');
  const expenses = await response.json();
  if (currentMonth in expenses){
    return expenses[currentMonth]
  }
  else{
    return 0.00
  }

}

export async function addExpense(expense) {
  const response = await fetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expense), 
  });

  if (!response.ok) throw new Error('Failed to add the expense');
}

export async function deleteExpense(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) throw new Error('Failed to delete the expense');
}