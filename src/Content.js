import React from 'react'
import Part from './Part'
import Sum from './Sum'

export default function Content({course}) {
  return (
    <>
    {course.parts.map((part) => (
      <Part part={part} key={part.id}/>
    ))}
    <Sum course={course}/>
    </>
  )
}
