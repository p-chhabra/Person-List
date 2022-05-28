import React from 'react'
import Button from './Button'

const ErrorModal = (props) => {
  return (
      <div className="absolute top-[25%] left-[18.3%] w-full sm:max-w-[200px] md:max-w-[700px] lg:max-w-[1200px] h-80">
    <div className=" p-5 flex flex-col justify-center items-center rounded-lg border-b-4 border-red-500 bg-[#583fb3]">
        <header className='font-bold p-5 text-gray-300 text-3xl'>
            <h2>{props.title}</h2>
        </header>
        <div className='p-5 text-gray-300 font-bold'>
            <p>{props.message}</p>
        </div>
        <footer className=''>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </div>
    </div>
  )
}

export default ErrorModal