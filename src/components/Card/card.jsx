import React, { Component } from 'react'
import styles from './card.module.css'
import logo from '../public/logo.png'

class Card extends Component {
  render() {
    const userData = this.props.userData
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={userData.image_url} alt="" className={styles.img} />
        </div>

        <div className={styles.metadata}>
          <h2 className={styles.name}>{userData.userName}</h2>
          <p className={styles.company}>{userData.company}</p>
          <div className={styles.divider}></div>
          <p className={styles.position}>{userData.position}</p>
          <p className={styles.email}>{userData.email}</p>
          <p className={styles.intro}>{userData.intro}</p>
        </div>
      </div>
    )
  }
}

export default Card
