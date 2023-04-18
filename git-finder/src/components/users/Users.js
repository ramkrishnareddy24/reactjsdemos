import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
            <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(5,1fr)',
    gripGap: '1rem'
}

export default Users