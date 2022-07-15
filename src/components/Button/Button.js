import React from 'react';

const Button = () => {
  const handleButton = () => {
    console.log('clickeaste');
  };
  return (
  <button onClick={handleButton}>My button</button>
  );
};
export default Button;
