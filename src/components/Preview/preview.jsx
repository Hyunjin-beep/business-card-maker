import React, { Component } from 'react'
import Card from '../Card/card'
import styles from './preview.module.css'

class Preview extends Component {
  render() {
    return (
      <section className={styles.container}>
        <h2 className={styles.title}>Card Preview</h2>
        <ul className={styles.cards}>
          {this.props.cards.map(card => (
            <Card key={card.id} card={card}></Card>
          ))}
        </ul>
      </section>
    )
  }
}

export default Preview
