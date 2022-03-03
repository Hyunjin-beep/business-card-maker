import React from 'react'
import styles from './card.module.css'
import logo from '../public/logo.png'

const Card = ({ card }) => {
  const { name, company, theme, title, email, message, fileName, fileURL } =
    card

  return (
    <li className={`${styles.container} ${chooseTheme(theme)}`}>
      <img src={fileURL} alt={fileName} className={styles.img} />

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

function chooseTheme(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark

    case 'light':
      return styles.light

    case 'colorful':
      return styles.colorful

    default:
      throw new Error(`Unknown theme : ${theme}`)
  }
}

export default Card
