import React, { Component } from 'react'
import Add from '../Add/add'
import Form from '../Form/form'
import styles from './edit.module.css'

class Edit extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.header}>Card Maker</h2>
        {this.props.cards &&
          this.props.cards.map(card => (
            <Form
              key={card.id}
              card={card}
              updateChanges={this.props.updateChanges}
              onDelete={this.props.onDelete}
              imageInput={this.props.imageInput}
            ></Form>
          ))}
        <Add
          addCard={this.props.addCard}
          imageInput={this.props.imageInput}
        ></Add>
      </div>
    )
  }
}

export default Edit
