import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Finsight</h1>
    </header>
  );
};

const styles = {
  header: {
    padding: '1rem',
    backgroundColor: '#1976d2',
    color: 'white',
    textAlign: 'center',
  }
};

export default Header;
