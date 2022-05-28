import React from 'react'

const UsersList = (props) => {
  return (
      <div className="bg-[#0a192f] rounded-lg w-full text-2xl font-bold h-screen flex flex-col items-center text-gray-300 pt-20">
          <div className="text-left text-3xl mb-5">
              <h2>Users List</h2>
          </div>
    <ul className="flex flex-col justify-center items-center w-full max-w-[1000px]">
        {props.users.map((user)=>{
            return <li key={user.id} className='bg-slate-700 p-4 border-b-4 border-green-500 w-full text-gray-300 font-bold rounded-md'>{user.name} ({user.age} years old)</li>
        })}
    </ul>
    </div>
  )
}

export default UsersList