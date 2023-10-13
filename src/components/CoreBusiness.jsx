import React from 'react'

export default function CoreBusiness(props) {
    const {title, body} = props
  return (
    <div>
      <p>
      {title}
      </p>
      <p>{body}</p>
      </div>
  )
}   
