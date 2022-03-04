import React, { Component } from 'react'
import styles from './form.module.css'

class Form extends Component {
  inputRef = React.createRef()

  state = {
    file: [],
  }

  hanldeImg = async event => {
    const uploaded = await this.props.imageInput.upload(event.target.files[0])
    this.setState({ file: uploaded })

    const card = {
      ...this.props.card,
      fileName: this.state.file.original_filename,
      fileURL: this.state.file.url,
    }
    this.props.updateChanges(card)
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

  handleDelete = event => {
    event.preventDefault()
    this.props.onDelete(this.props.card)
  }

  onButtonClicked = event => {
    event.preventDefault()
    this.inputRef.current.click()
  }

  render() {
    const { name, company, theme, title, email, message, fileName } =
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
            // name="Theme"
            name="theme"
            className={styles.selector}
            value={theme}
            onChange={this.onChange}
          >
            <option value="dark">dark</option>
            <option value="light">light</option>
            <option value="colorful">colorful</option>
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
              accept="image/*"
              ref={this.inputRef}
              onChange={this.hanldeImg}
            />
            <button className={styles.imgLabel} onClick={this.onButtonClicked}>
              {fileName}
            </button>
            <input
              type="submit"
              value="Delete"
              className={styles.addBtn}
              onClick={this.handleDelete}
            />
          </div>
        </form>
      </>
    )
  }
}

export default Form
