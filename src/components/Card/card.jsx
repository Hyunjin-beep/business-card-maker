import React, { Component } from 'react'
import styles from './card.module.css'
import logo from '../public/logo.png'

class Card extends Component {
  render() {
    const { name, company, theme, title, email, message, fileName, fileURL } =
      this.props.card
    return (
      <li className={styles.container}>
        <img src="" alt="" className={styles.img} />

        <div className={styles.metadata}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.company}>{company}</p>
          <div className={styles.divider}></div>
          <p className={styles.position}>{title}</p>
          <p className={styles.email}>{email}</p>
          <p className={styles.intro}>{message}</p>
        </div>
      </li>
    )
  }
}

export default Card
