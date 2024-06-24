import React from 'react'
import "./FeedBack.css"


export default function FeedBack(props) {
  return (
    <section>
      <h1 className='h1-dess'>{props.feedBack.text}</h1>
    </section>
  )
}
