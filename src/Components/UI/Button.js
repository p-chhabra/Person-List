import React from 'react'

const Button = (props) => {
  return (
    <button type={props.type || 'button'} onClick={props.onClick} className='mt-6 px-4 py-3 mx-auto h-13 font-bold text-center text-gray-300 border-4 rounded-lg hover:bg-green-500 hover:border-green-500 duration-300'>{props.children}</button>
  )
}

export default Button