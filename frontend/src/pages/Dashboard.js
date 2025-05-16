import React from 'react';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        <h2>Dashboard</h2>
        <p>This is where expense data will be shown.</p>
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
