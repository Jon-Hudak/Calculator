import React from 'react'

export default function Button({ id, text}) {
  return (
    <button className='btn btn-primary' id={id}>{text}</button>
  )
}
