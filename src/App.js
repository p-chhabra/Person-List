import logo from './logo.svg';
import AddUsers from './Components/Users/AddUsers';
import Card from './Components/UI/Card';
import UsersList from './Components/Users/UsersList';
import { useState } from 'react';

function App() {

  const [userList , setUserList] = useState([]);
  const addUserHandler = (username, userage) =>{
    setUserList((prevUserList)=>{
      return [...prevUserList, {name: username, age: userage}]
    })
  }

  return (
    <div>
      <AddUsers onAddUser = {addUserHandler}/>
      <UsersList users = {userList}/>
    </div>
  );
}

export default App;
