import React, { Component } from 'react'
import styles from './form.module.css'

class Form extends Component {
  render() {
    return (
      <>
        <div className={styles.container}>
          <input
            type="text"
            placeholder="John Smith"
            className={styles.nameField}
          />
          <input
            type="text"
            placeholder="Apple"
            className={styles.companyField}
          />
          <select name="Theme" className={styles.themeField}>
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
          </select>
          <input
            type="text"
            placeholder="Software Developer"
            className={styles.positionField}
          />
          <input
            type="text"
            placeholder="jSmith@gmail.com"
            className={styles.emailField}
          />
          <input
            type="text"
            placeholder="I love Coding"
            className={styles.introField}
          />
          <input type="submit" value="No File" className={styles.imgBtn} />
          <input type="submit" value="Add" className={styles.addBtn} />
        </div>
      </>
    )
  }
}

export default Form
