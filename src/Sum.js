import React from 'react';

export default function Sum({ course }) {
  const sum = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return <div>total of {sum} exercises</div>;
}
