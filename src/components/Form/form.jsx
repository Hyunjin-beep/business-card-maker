import React, { Component } from 'react'
import styles from './form.module.css'

class Form extends Component {
  hanldeImg = event => {
    // this.props.onImg(event.target.files[0])
  }

  onChange = event => {
    if (event.currentTarget === null) {
      return
    }
    event.preventDefault()
    //update cards
    const card = {
      ...this.props.card,
      [event.currentTarget.name]: event.currentTarget.value,
    }
    this.props.updateChanges(card)
  }

  render() {
    const { name, company, theme, title, email, message, fileName, fileURL } =
      this.props.card
    return (
      <>
        <form className={styles.container}>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={name}
            onChange={this.onChange}
          />
          <input
            type="text"
            name="company"
            className={styles.input}
            value={company}
            onChange={this.onChange}
          />
          <select
            name="Theme"
            name="theme"
            className={styles.selector}
            value={theme}
            onChange={this.onChange}
          >
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
            <option value="Colorful">Colorful</option>
          </select>

          <input
            type="text"
            name="title"
            className={styles.input}
            value={title}
            onChange={this.onChange}
          />
          <input
            type="email"
            value={email}
            name="email"
            className={styles.input}
            onChange={this.onChange}
          />

          <textarea
            type="text"
            row="2"
            name="message"
            className={styles.textarea}
            value={message}
            onChange={this.onChange}
          />

          <div className={styles.buttons}>
            <input
              type="file"
              className={styles.imgBtn}
              // value={fileName}
              onChange={this.hanldeImg}
            />
            <input
              type="submit"
              value="Delete"
              className={styles.addBtn}
              onClick={this.handleSave}
            />
          </div>
        </form>
      </>
    )
  }
}

export default Form
