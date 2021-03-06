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
  inputRef = React.createRef()

  state = {
    file: [],
  }

  handleSave = event => {
    event.preventDefault()
    const enteredName = this.name.current.value
    const enteredCompany = this.company.current.value
    const enteredTheme = this.theme.current.value
    const enteredPosition = this.position.current.value
    const enteredEmail = this.email.current.value
    const enteredIntro = this.intro.current.value
    const fileName = this.state.file.original_filename
    const fileURL = this.state.file.url

    const card = {
      id: Date.now(),
      name: enteredName,
      company: enteredCompany,
      theme: enteredTheme,
      title: enteredPosition,
      email: enteredEmail,
      message: enteredIntro,
      fileName: fileName,
      fileURL: fileURL,
    }

    this.props.addCard(card)
    this.form.current.reset()
    this.setState({ file: [] })
  }

  hanldeImg = async event => {
    const uploaded = await this.props.imageInput.upload(event.target.files[0])
    this.setState({ file: uploaded })
  }

  onButtonClicked = event => {
    event.preventDefault()
    this.inputRef.current.click()
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
          <select name="Theme" ref={this.theme} className={styles.selector}>
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="colorful">colorful</option>
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
              ref={this.inputRef}
              className={styles.imgBtn}
              onChange={this.hanldeImg}
            />
            <button className={styles.imgLabel} onClick={this.onButtonClicked}>
              {this.state.file.original_filename
                ? this.state.file.original_filename
                : 'Choose File'}
            </button>
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
