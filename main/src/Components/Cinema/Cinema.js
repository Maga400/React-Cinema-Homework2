import React from 'react'
import './Cinema.css'

export default function Cinema(props) {
  return (
    <section className='section-design'>
      <h1 className='h1-d'>Name : {props.header.name}</h1>
      <h1 className='h1-d'>Address : {props.header.address}</h1>
      <h1 className='h1-d'>Rating : {props.header.rating}</h1>

    </section>
  )
}
