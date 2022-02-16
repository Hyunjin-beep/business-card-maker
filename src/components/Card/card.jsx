import React, { Component } from 'react'
import styles from './card.module.css'
import logo from '../public/logo.png'

class Card extends Component {
  render() {
    const { name, company, theme, title, email, message, fileName, fileURL } =
      this.props.card
    return (
      <li className={styles.container}>
        <img src={logo} alt="" className={styles.img} />

        <div className={styles.metadata}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.company}>{company}</p>

          <p className={styles.title}>{title}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.message}>{message}</p>
        </div>
      </li>
    )
  }
}

export default Card
