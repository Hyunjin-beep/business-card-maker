import React, { Component } from 'react'
import Card from '../Card/card'
import Footer from '../Footer/footer'
import Form from '../Form/form'
import Headers from '../Headers/headers'

class Maker extends Component {
  state = {
    loginStatus: true,
  }
  render() {
    return (
      <section>
        <Headers loginStatus={this.state.loginStatus}></Headers>
        {/* <div>
          <Form></Form>
          <Card></Card>
        </div> */}
        <Footer></Footer>
      </section>
    )
  }
}

export default Maker
