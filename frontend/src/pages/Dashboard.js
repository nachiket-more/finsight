import React from 'react';
import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        <h2>Dashboard</h2>
        <ExpenseList />
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
