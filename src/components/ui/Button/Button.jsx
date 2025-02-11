import React from 'react';
import './index.css';

export const Button = ({ onClick, children, className, icon }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition ${className}`}
    >
      {icon && <img src={icon} className='icon'/> || null} {children}
    </button>
  );
};