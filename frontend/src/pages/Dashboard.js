import React, { useState } from 'react';
import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';

const Dashboard = () => {
  const [refresh, setRefresh] = useState(0);
  const triggerRefresh = () => setRefresh(prev => prev + 1);

  return (
    <div>
      <Header />
      <main style={styles.main}>
        <h2>Dashboard</h2>
        <ExpenseForm onAdd={triggerRefresh} />
        <ExpenseList refreshTrigger={refresh} />
      </main>
    </div>
  );
};

const styles = {
  main: {
    padding: '1rem',
  },
};

export default Dashboard;
