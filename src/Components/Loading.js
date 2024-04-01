import React from 'react'
import loading from './loading.gif'
import './Loading.css'

const Loading = () => {
  return (
    <div>
      <img className='spinner' src={loading} alt='loading'/>
    </div>
  )
}

export default Loading
