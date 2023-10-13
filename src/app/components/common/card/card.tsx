import React from 'react'
import { ICard } from '../../../interfaces/interfaces'
import './card.scss'

export default function Card({ title, text1, text2, text3 }: ICard) {
  return (
    <div className='d-flex justify-content-center'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title d-flex justify-content-center'>{title}</h5>
          <p className='card-text'>{text1}</p>
          <p className='card-text'>{text2}</p>
          <p className='card-text'>{text3}</p>
        </div>
      </div>
    </div>
  )
}
