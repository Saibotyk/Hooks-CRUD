import React, { useState } from 'react'

export default function AddUser({ users, setUsers }) {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [editingUser, setEditingUser] = useState(null); // new state for editing


  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value)
  }

  const handleChangeLastName = (event) => {
    setLastName(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const usersCopy = [...users]
    const id = new Date().getTime()

    if (editingUser) {
        // Editing existing user
        const editedUserIndex = usersCopy.findIndex(user => user.id === editingUser.id);
        usersCopy[editedUserIndex] = { id: editingUser.id, firstName, lastName };
        setEditingUser(null); // Reset editing state
      } else {
        // Adding new user
        usersCopy.push({ id, firstName, lastName });
      }
  
      setUsers(usersCopy);
      setFirstName("");
      setLastName("");
    }
  


  return (
    <form className='form' action="submit" onSubmit={handleSubmit}>
      <div className='form-section'>
        <label htmlFor="firstName">FirstName</label>
        <input className='input' type="text" id='firstName' name='firstName' onChange={handleChangeFirstName} value={firstName}/>
      </div>
      <div className='form-section'>
        <label htmlFor="lastName">LastName</label>
        <input className='input' type="text" id='lastName' name='lastName' onChange={handleChangeLastName} value={lastName}/>
      </div>
      <button className='btn'>Add new user</button>
    </form>
  )
}