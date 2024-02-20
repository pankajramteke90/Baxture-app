"use client"
import React, { useState } from 'react'
import { Card, Avatar, Button, Group } from '@mantine/core';
import { IconPhoneCall, IconWorld, IconUserPlus, IconBold, IconTrash, IconUserMinus, IconStar } from '@tabler/icons-react';

export default function UserCard({ user }) {
  const [isFollowing, setIsFollowing] = useState(true);

  const handleFollowToggle = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div>
      <Card
        style={{
          border: '1px solid #cfd8dc',
          borderRadius: '10px',
          padding: '15px',
          width: '300px',
          textAlign: 'center',
          height: '350px'


        }}
      >
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ margin: '0 auto', width: '150px', height: '150px', borderRadius: '100px', overflow: 'hidden' }}>
            <img src={user.avatar} alt={user.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <h3 style={{ marginTop: '0.5rem', fontWeight: '500' }}>{user.name} {!isFollowing && <IconStar size={16} />}</h3>
          <p style={{
            textAlign: 'start', color: 'rgb(134,142,150)', fontSize: '15px'
          }}> @ <span onMouseEnter={(e) => e.target.style.borderBottom = '1px solid rgb(134,142,150)'}
            onMouseLeave={(e) => e.target.style.borderBottom = '1px solid transparent'} style={{
              cursor: 'pointer',
              borderBottom: '1px solid transparent'
            }} > {user.email}</span></p>
          <p style={{ textAlign: 'start', color: 'rgb(134,142,150)', fontSize: '15px' }}>  <IconPhoneCall size={14} /><span onMouseEnter={(e) => e.target.style.borderBottom = '1px solid rgb(134,142,150)'}
            onMouseLeave={(e) => e.target.style.borderBottom = '1px solid transparent'} style={{
              cursor: 'pointer',
              borderBottom: '1px solid transparent'
            }}> {user.phone}</span> </p>
          <p style={{ textAlign: 'start', color: 'rgb(134,142,150)', fontSize: '15px' }}> <IconWorld size={14} /> <span onMouseEnter={(e) => e.target.style.borderBottom = '1px solid rgb(134,142,150)'}
            onMouseLeave={(e) => e.target.style.borderBottom = '1px solid transparent'} style={{
              cursor: 'pointer',
              borderBottom: '1px solid transparent'
            }}>{user.website}</span></p>
        </div>

        <Group position="center">

          {isFollowing ? (<Button onClick={handleFollowToggle} style={{ color: 'white', backgroundColor: 'rgb(28,126,214)', border: 'none', borderRadius: '4px', cursor: 'pointer', padding: '10px 35px', margin: '5px', fontWeight: 'bold' }}> <IconUserPlus size={15} fontWeight={IconBold} style={{ marginRight: '5px' }} /> Follow</Button>) : (<Button onClick={handleFollowToggle} style={{ color: 'black', backgroundColor: 'white', border: '1px solid lightblue', borderRadius: '4px', cursor: 'pointer', padding: '10px 35px', margin: '5px', fontWeight: 'bold' }}> <IconUserMinus size={15} fontWeight={IconBold} style={{ marginRight: '5px' }} /> Unfollow</Button>
          )}
          <Button style={{ backgroundColor: 'white', color: 'rgb(28,126,214)', borderStyle: 'solid', border: '1px solid rgb(28,126,214)', borderRadius: '4px', cursor: 'pointer', padding: '8px 35px', margin: '0px', fontWeight: 'bold' }}> <IconTrash size={15} style={{ marginRight: '5px', display: 'inline-block' }} /> Delete</Button>
        </Group>
      </Card>
    </div>
  )
}
