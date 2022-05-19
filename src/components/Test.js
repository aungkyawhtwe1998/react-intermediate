import React from 'react'

export default function Test(props) {
  return (
    <div>
        Hello {props.name}
        {props.children}
    </div>
  )
}
