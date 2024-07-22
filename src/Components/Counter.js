// src/Counter.js

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.count}>{count}</h1>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={decrement}>-</button>
        <button style={styles.button} onClick={increment}>+</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#282c34',
    color: 'white',
  },
  count: {
    fontSize: '4rem',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    fontSize: '2rem',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: '#61dafb',
    color: '#282c34',
  },
};

export default Counter;
