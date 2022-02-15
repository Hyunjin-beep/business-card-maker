import React, { Component } from 'react'

import Edit from '../Edit/edit'
import Footer from '../Footer/footer'

import Headers from '../Headers/headers'
import Preview from '../Preview/preview'
import styles from './maker.module.css'

class Maker extends Component {
  state = {
    loginStatus: true,
    cards: [
      {
        id: '0',
        name: 'Ellie1',
        company: 'Samsung',
        theme: 'dark',
        title: 'Software Engineer',
        email: 'ellie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: null,
      },
      {
        id: '1',
        name: 'Ellie2',
        company: 'Samsung',
        theme: 'light',
        title: 'Software Engineer',
        email: 'ellie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: 'ellie.png',
      },
      {
        id: '2',
        name: 'Ellie3',
        company: 'Samsung',
        theme: 'colorful',
        title: 'Software Engineer',
        email: 'ellie@gmail.com',
        message: 'go for it',
        fileName: 'ellie',
        fileURL: null,
      },
    ],
  }

  updateChanges = card => {
    const updated = this.state.cards.map(item => {
      return card.id === item.id ? card : item
    })
    this.setState({ cards: updated })
  }

  addCard = card => {
    const updated = [...this.state.cards, card]
    this.setState({ cards: updated })
  }

  render() {
    return (
      <section className={styles.container}>
        <Headers loginStatus={this.state.loginStatus}></Headers>
        <div className={styles.content}>
          <Edit
            cards={this.state.cards}
            updateChanges={this.updateChanges}
            addCard={this.addCard}
          ></Edit>
          <Preview cards={this.state.cards}></Preview>
        </div>

        <Footer></Footer>
      </section>
    )
  }
}

export default Maker
