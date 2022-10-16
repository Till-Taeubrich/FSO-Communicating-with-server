import React from 'react'

export default function Part({part}) {
  return (
    <div key={part.id}>{part.name} {part.exercises}</div>
  )
}
