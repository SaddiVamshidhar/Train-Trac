import React from 'react';

export default function PageHeader({ title, description }) {
  return (
    <div className="text-center space-y-4 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-accent-500">{title}</h1>
      {description && (
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}