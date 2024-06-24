import React from 'react'
import './Film.css'


export default function Film(props) {
  return (
    <section className='des' style={{backgroundImage:`url(${props.film.img})`,backgroundSize:"100% 100%",backgroundRepeat:"no-repeat"}}>
      <h1 className='h1-des'>{props.film.name}</h1>
      <h1 className='h1-des'>{props.film.genre}</h1>
      <h1 className='h1-des'>{props.film.rejissor}</h1>
      <h1 className='h1-des'>{props.film.finance}</h1>
      <h1 className='h1-des'>{props.film.description}</h1>

    </section>
  )
}
