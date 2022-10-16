import React from 'react'
import Part from './Part'

export default function Content({course}) {
  return (
    <>
    {course.parts.map((part) => (
      <Part part={part}/>
    ))}
    </>
  )
}
