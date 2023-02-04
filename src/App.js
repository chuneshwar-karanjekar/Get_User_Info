
import React, { useState } from "react";
import './App.css';
import axios from 'axios';

const UserCard = () =>{

  // use useState
  const[users, setUsers] =useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = ()=>{
    setLoading(true);
    // get api
    axios.get('https://reqres.in/api/users?page=1')
    // for scusesfull call
    .then(res=>{
      setLoading(false);
      setUsers(res.data.data);
    })
    // for error
    .catch(err =>{
      console.log(err);
      setLoading(false);
    });

  };


  return(
    <div className="UserCard">
    {/* navigation bar */}
    <nav className="navbar">
      <h1 className="brand-name">Brand Name</h1>
      <button className="btn-get-users" onClick={getUsers}>Get users</button>
    </nav>
    {/* wait for data */}
    {loading ? (
        <div className="loader">Loading...</div>
      ) : (
    <div className="grid">
    {/* display user data from api */}
    {users.map(user =>(
      <div key={user.id} className="card">
    <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
    <p className="name" >{`${user.first_name} ${user.last_name}`}</p>
    <p className="email">{user.email}</p>
    </div>
    ))}
    </div>
      )}
    </div>
  );
};




export default UserCard;

