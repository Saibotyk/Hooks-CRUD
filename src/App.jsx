import React from 'react'
import ReadUser from './components/user/ReadUser/ReadUser'
import AddUser from './components/user/AddUser/AddUser'
import { useState } from 'react'

export default function App() {

  const [users, setUsers] = useState([
    { id: 1, firstName: "Janis", lastName: "Joplin" },
    { id: 2, firstName: "Jimmy", lastName: "Hendrix" },
    { id: 3, firstName: "Maurice", lastName: "Barthelemy" },
  ])

  const handleEdit = (user) => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEditingUser(user);
  }

  return (
    <div className='container'>
      <h1>CRUD with hooks</h1>
      <div className='body'>
        <div className='section'>
          <h2 className='text'>Add User</h2>
          <AddUser users={users} setUsers={setUsers} />
        </div>
        <div className='section'>
          <h2 className='text'>View Users</h2>
          <ReadUser users={users} setUsers={setUsers} handleEdit={handleEdit}/>
        </div>
      </div>
    </div>
  )
}