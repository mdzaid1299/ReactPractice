// src/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    title: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#333',
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap', // Allow wrapping to next line
      gap: '15px',
      maxWidth: '58em', // Adjust width to accommodate 4 buttons per row
    },
    button: {
      padding: '0.1em 0.25em',
      width: '13em',
      height: '4.2em',
      backgroundColor: '#212121',
      border: '0.08em solid #fff',
      borderRadius: '0.3em',
      fontSize: '12px',
      cursor: 'pointer',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    buttonText: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '8.25em',
      height: '2.5em',
      backgroundColor: '#212121',
      borderRadius: '0.2em',
      fontSize: '1.5em',
      color: '#fff',
      border: '0.08em solid #fff',
      boxShadow: '0 0.4em 0.1em 0.019em #fff',
      transition: 'all 0.5s',
    },
    buttonTextHover: {
      transform: 'translate(0, 0.4em)',
      boxShadow: '0 0 0 0 #fff',
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.transform = styles.buttonTextHover.transform;
    e.target.style.boxShadow = styles.buttonTextHover.boxShadow;
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = '';
    e.target.style.boxShadow = styles.buttonText.boxShadow;
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Basic Applications of React Components</h1>
      <div style={styles.buttonRow}>
        <Link to="/counter" style={styles.button}>
          <span
            style={styles.buttonText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Counter
          </span>
        </Link>
        <Link to="/about" style={styles.button}>
          <span
            style={styles.buttonText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </span>
        </Link>
        <Link to="/about" style={styles.button}>
          <span
            style={styles.buttonText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </span>
        </Link>
        <Link to="/about" style={styles.button}>
          <span
            style={styles.buttonText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </span>
        </Link>
        <Link to="/about" style={styles.button}>
          <span
            style={styles.buttonText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            About
          </span>
        </Link>
        <Link to="/contact" style={styles.button}>
          <span
            style={styles.buttonText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </span>
        </Link>
        <Link to="/another" style={styles.button}>
          <span
            style={styles.buttonText}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Another
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
