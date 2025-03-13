import React from 'react';

export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-primary-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-primary-700/50 ${className}`}>
      {children}
    </div>
  );
}