import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useState } from 'react';

const AddUsers = (props) => {

    const [enteredUsername, setEneteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const userNameChangeHandler = (e)=>{
        setEneteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) =>{
        setEnteredAge(e.target.value);
    }

    const addUserHandler = (e) =>{
        e.preventDefault();
        props.onAddUser(enteredUsername, enteredAge);
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0) return;
        if(+enteredAge < 1) return;
        setEneteredUsername("");
        setEnteredAge("");
    }

  return (
      <Card>
        <div className='flex flex-col items-center h-full pb-10 w-full bg-[#0a192f] text-gray-300 font-bold'>
        <form onSubmit={addUserHandler} className='flex flex-col w-full max-w-[1000px] bg-slate-700 p-10 mt-10 rounded-lg' action="">
        <label className='py-2 row-span-3 text-2xl' htmlFor="username">Username</label>
        <input className='py-3 px-4 mb-4 rounded-md row-span-2 text-black' id="username" type="text" value={enteredUsername} onChange={userNameChangeHandler}/>
        <label className='py-2 row-span-3 text-2xl' htmlFor="age">Age (Years)</label>
        <input className='py-3 px-4 mb-4 rounded-md row-span-2 text-black' id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>
        <Button type="submit">Add User</Button>
        </form>
        </div>
      </Card>
  )
}

export default AddUsers