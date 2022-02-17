import React, { Component } from 'react'
import styles from './add.module.css'

class Add extends Component {
  name = React.createRef()
  company = React.createRef()
  theme = React.createRef()
  position = React.createRef()
  email = React.createRef()
  intro = React.createRef()
  form = React.createRef()

  handleSave = event => {
    event.preventDefault()
    const enteredName = this.name.current.value
    const enteredCompany = this.company.current.value
    const enteredTheme = this.theme.current.value
    const enteredPosition = this.position.current.value
    const enteredEmail = this.email.current.value
    const enteredIntro = this.intro.current.value

    const card = {
      id: Date.now(),
      name: enteredName,
      company: enteredCompany,
      theme: enteredTheme,
      title: enteredPosition,
      email: enteredEmail,
      message: enteredIntro,
      fileName: 'ellie',
      fileURL: null,
    }

    this.props.addCard(card)
    this.form.current.reset()
  }

  hanldeImg = event => {
    // this.props.onImg(event.target.files[0])
  }

  render() {
    return (
      <>
        <form className={styles.container} ref={this.form}>
          <input
            type="text"
            placeholder="John Smith"
            className={styles.input}
            ref={this.name}
          />
          <input
            type="text"
            placeholder="Apple"
            className={styles.input}
            ref={this.company}
          />
          <select
            name="Theme"
            name="theme"
            ref={this.theme}
            className={styles.selector}
          >
            <option value="Dark">Dark</option>
            <option value="Light">Light</option>
            <option value="Colorful">Colorful</option>
          </select>

          <input
            type="text"
            placeholder="Software Developer"
            className={styles.input}
            ref={this.position}
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            ref={this.email}
          />

          <textarea
            type="text"
            row="2"
            placeholder="I love Coding"
            className={styles.textarea}
            ref={this.intro}
          />

          <div className={styles.buttons}>
            <input
              type="file"
              className={styles.imgBtn}
              onChange={this.hanldeImg}
            />
            <input
              type="submit"
              value="Add"
              className={styles.addBtn}
              onClick={this.handleSave}
            />
          </div>
        </form>
      </>
    )
  }
}

export default Add
