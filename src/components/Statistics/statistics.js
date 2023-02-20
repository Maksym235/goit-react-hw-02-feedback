import React from 'react';

export function Statistics({ stats: { good, neutral, bad }, total, percent }) {
  return (
    <div>
      <p>Statistics</p>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad:{bad}</p>
      <p>Total: {total}</p>
      {!isNaN(percent) && <p>Positive Percentage: {percent}%</p>}
    </div>
  );
}
