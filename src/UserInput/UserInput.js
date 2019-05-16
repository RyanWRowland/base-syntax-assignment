import React from 'react'

const UserInput = (props) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <input style={{ height: '50px', width: '200px', fontSize: '24px' }} type="text" onChange={props.change} value={props.username} />
    </div>
  )
}

export default UserInput
