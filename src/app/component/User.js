"use client"
import UserCard from '../component/UserCard'
import React, { useState, useEffect } from 'react';

export default function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        const formattedUsers = data.slice(0, 10).map(user => ({
          name: user.name,
          email: user.email,
          phone: user.phone,
          website: user.website,
          avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`
        }));
        setUsers(formattedUsers);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  )
}
