import React from 'react';

const SkeletonTable = () => {
  return (
    <div className="animate-pulse space-y-4">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="h-6 bg-gray-700 rounded w-full"></div>
      ))}
    </div>
  );
};

export default SkeletonTable;
