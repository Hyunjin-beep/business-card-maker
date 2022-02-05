import React, { Component } from 'react'
import styles from './form.module.css'

class Form extends Component {
  name = React.createRef()
  company = React.createRef()
  theme = React.createRef()
  position = React.createRef()
  email = React.createRef()
  intro = React.createRef()

  handleSave = event => {
    event.preventDefault()
    const enteredName = this.name.current.value
    const enteredCompany = this.company.current.value
    const enteredTheme = this.theme.current.value
    const enteredPosition = this.position.current.value
    const enteredEmail = this.email.current.value
    const enteredIntro = this.intro.current.value

    this.props.onSaveInput(
      enteredName,
      enteredCompany,
      enteredTheme,
      enteredPosition,
      enteredEmail,
      enteredIntro
    )

    // this.name.current.value = ''
    // this.company.current.value = ''
    // this.theme.current.value = ''
    // this.position.current.value = ''
    // this.email.current.value = ''
    // this.intro.current.value = ''
  }

  hanldeImg = event => {
    this.props.onImg(event.target.files[0])
  }

  render() {
    return (
      <>
        <div className={styles.container}>
          <div className={styles.firstLine}>
            <input
              type="text"
              placeholder="John Smith"
              className={styles.nameField}
              ref={this.name}
            />
            <input
              type="text"
              placeholder="Apple"
              className={styles.companyField}
              ref={this.company}
            />
            <select name="Theme" className={styles.themeField} ref={this.theme}>
              <option value="Dark">Dark</option>
              <option value="Light">Light</option>
            </select>
          </div>

          <div className={styles.secondLine}>
            <input
              type="text"
              placeholder="Software Developer"
              className={styles.positionField}
              ref={this.position}
            />
            <input
              type="email"
              placeholder={this.props.userDetail.email}
              className={styles.emailField}
              ref={this.email}
            />
          </div>

          <div className={styles.thridLine}>
            <textarea
              type="text"
              row="2"
              placeholder="I love Coding"
              className={styles.introField}
              ref={this.intro}
            />
          </div>

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
        </div>
      </>
    )
  }
}

export default Form
