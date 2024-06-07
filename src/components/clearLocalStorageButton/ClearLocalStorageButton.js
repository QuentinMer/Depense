import React from 'react';
import s from "style.module.css";

const ClearLocalStorageButton = () => {
  const handleClearLocalStorage = () => {
    localStorage.clear();
    window.location.reload(); 
  };

  return (
    <button className={`btn btn-primary ms-2`} onClick={handleClearLocalStorage}>Réinitialiser</button>
  );
};

export default ClearLocalStorageButton;
