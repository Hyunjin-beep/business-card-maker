import React, { Component } from 'react'

class Headers extends Component {
  handleSignOut = () => {
    this.props.onSignOut()
  }
  render() {
    return (
      <div>
        <div>
          <img src="../../../public/favicon.ico" alt="" />
          <h2>Business Card Maker</h2>
        </div>

        <button onClick={this.handleSignOut}>Log Out</button>
      </div>
    )
  }
}

export default Headers
