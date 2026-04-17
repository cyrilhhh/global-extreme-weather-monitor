import React from 'react';

export const SkeletonRow: React.FC = () => {
  return (
    <div className="flex items-center py-5 border-b border-text-light/40 -mx-2 px-2">
      {/* Rank Skeleton */}
      <div className="w-10">
        <div className="w-5 h-4 bg-text-light/30 rounded animate-pulse"></div>
      </div>

      {/* City & Country Skeleton */}
      <div className="flex-1 pr-4">
        <div className="w-32 h-5 bg-text-light/30 rounded animate-pulse mb-2"></div>
        <div className="w-20 h-3 bg-text-light/30 rounded animate-pulse"></div>
      </div>

      {/* Population Skeleton */}
      <div className="w-24">
        <div className="w-16 h-4 bg-text-light/30 rounded animate-pulse"></div>
      </div>

      {/* Temperature Data Skeleton */}
      <div className="w-28 flex flex-col items-end">
        <div className="w-16 h-7 bg-text-light/30 rounded animate-pulse mb-2"></div>
        <div className="w-20 h-3 bg-text-light/30 rounded animate-pulse"></div>
      </div>
    </div>
  );
};
