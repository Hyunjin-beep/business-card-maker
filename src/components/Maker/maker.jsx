import React, { Component } from 'react'

import Edit from '../Edit/edit'
import Footer from '../Footer/footer'

import Headers from '../Headers/headers'
import Preview from '../Preview/preview'
import styles from './maker.module.css'

class Maker extends Component {
  state = {
    loginStatus: true,
    userId: '',
    cards: [
      // {
      //   id: '0',
      //   name: 'Ellie1',
      //   company: 'Samsung',
      //   theme: 'dark',
      //   title: 'Software Engineer',
      //   email: 'ellie@gmail.com',
      //   message: 'go for it',
      //   fileName: 'ellie',
      //   fileURL: null,
      // },
    ],
  }

  updateChanges = card => {
    const updated = this.state.cards.map(item => {
      return card.id === item.id ? card : item
    })

    this.setState({ cards: updated })
    this.props.database.save_card(this.state.userId, card)
  }

  addCard = card => {
    const updated = [...this.state.cards, card]

    this.setState({ cards: updated })
    this.props.database.save_card(this.state.userId, card)
  }

  handleDelete = card => {
    this.setState({
      cards: this.state.cards.filter(item => item.id !== card.id),
    })
    this.props.database.delete_card(this.state.userId, card)
  }

  componentDidMount() {
    this.props.authService.onAuthState(user => {
      user && this.setState({ userId: user.uid })

      this.props.database.load_card(this.state.userId, card => {
        this.handleShow(card)
      })
    })
  }

  handleShow = card => {
    let newCard = []

    for (let item in card) {
      newCard.push(card[item])
    }

    this.setState({ cards: newCard })
  }

  changeLoginStatus = status => {
    this.setState({ loginStatus: status })
  }

  render() {
    return (
      <section className={styles.container}>
        <Headers
          loginStatus={this.state.loginStatus}
          authService={this.props.authService}
          changeLoginStatus={this.changeLoginStatus}
        ></Headers>
        <div className={styles.content}>
          <Edit
            cards={this.state.cards}
            updateChanges={this.updateChanges}
            addCard={this.addCard}
            onDelete={this.handleDelete}
            imageInput={this.props.imageInput}
          ></Edit>
          <Preview cards={this.state.cards}></Preview>
        </div>

        <Footer loginStatus={this.state.loginStatus}></Footer>
      </section>
    )
  }
}

export default Maker
