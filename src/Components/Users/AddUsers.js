import React from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';

const AddUsers = (props) => {

    const [enteredUsername, setEneteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState();

    const userNameChangeHandler = (e)=>{
        setEneteredUsername(e.target.value);
    }

    const ageChangeHandler = (e) =>{
        setEnteredAge(e.target.value);
    }

    const addUserHandler = (e) =>{
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length ===0){
            setError(
                {
                    title:"Invalid Input",
                    message: "Please enter a valid Name and Age (Non-Empty Values)"
                }
            );
            return;
        };
        if(+enteredAge < 1){
            setError({
                title: "InValid Age",
                message: "Please enter a age value greater than or equal to 1"
            })
            return;
        };
        props.onAddUser(enteredUsername, enteredAge);
        setEneteredUsername("");
        setEnteredAge("");
    }

    const errorHandler = () =>{
        setError(null);
    }

  return (
      <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
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
      </div>
  )
}

export default AddUsers