// import _ from 'lodash'
import './style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import me from './me.jpg'


class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1> Welcome to vphreak.net </h1>
        <img src={me} />
      </div>
    )
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
)
