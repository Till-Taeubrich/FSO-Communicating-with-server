import React from 'react'

export default function Filter({ handleFiltering }) {
  return (
    <div>
      filter shown with: <input onChange={handleFiltering} />
    </div>
  );
}
