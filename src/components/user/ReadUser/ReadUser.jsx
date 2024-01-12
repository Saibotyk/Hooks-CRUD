import React from 'react'

export default function ReadUser({ users , setUsers, handleEdit}) {

    const handleDelete = (id) => {
        const usersCopy = [...users]
        const userCopyUpdate = usersCopy.filter(user => user.id !== id)
        setUsers(userCopyUpdate)
      }

    return (
        <table >
            <thead className='table'>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className='table'>
                {users.map((user) =>
                    <tr key={user.id}>
                        <th>
                            {user.firstName}
                        </th>
                        <th>
                            {user.lastName}
                        </th>
                        <th className='btn-flex'>
                            <button className='btn btn-form' onClick={() => handleEdit(user)}>Edit</button>
                            <button className='btn btn-form' onClick={() => handleDelete(user.id)}>Delete</button>
                        </th>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
