export interface Expense {
  id: number;
  title: string;
  amount: number;
  date: string;
  category: 'Food' | 'Travel' | 'Utilities' | 'Entertainment' | 'Others';
}
