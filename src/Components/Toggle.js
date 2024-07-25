import React, { useState } from 'react';

const ToggleButton = () => {
  const [toggleState, setToggleState] = useState(false);
  const handleclick = ()=>{
    setToggleState(!toggleState);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button
        style={{
          backgroundColor: toggleState ? '#4CAF50' : '#ccc',
          color: toggleState ? '#fff' : '#333',
          border: 'none',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={handleclick}
      >
        {toggleState ? 'ON' : 'OFF'}
      </button>
      <span style={{ marginLeft: '10px' }}>{toggleState ? 'ON' : 'OFF'}</span>
    </div>
  );
};

export default ToggleButton;