import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  const usernameStyle = {
    textAlign: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#BADA55'
  };

  return (
    <div className="output">
      <p style={usernameStyle}>Username: {props.username}</p>
      <p>
        Lorem sint do incididunt consequat sit consectetur dolore sint minim elit incididunt laborum cillum. Id laboris ex amet velit commodo amet ullamco ex adipisicing excepteur commodo qui. Excepteur Lorem ut consequat et consequat. Proident mollit laboris officia laborum enim aliquip nulla cupidatat. Commodo enim sit minim cillum ea incididunt commodo qui et sit laborum labore excepteur. Mollit velit enim do aliqua incididunt eiusmod Lorem ea quis tempor labore.
      </p>
      <p>
        Cillum anim nulla ullamco cillum consequat. Magna amet cupidatat dolore esse commodo. Cillum non tempor culpa incididunt magna elit voluptate dolore ea aute laboris consectetur. In proident elit tempor pariatur occaecat ea.
      </p>
    </div>
  )
}

export default UserOutput
