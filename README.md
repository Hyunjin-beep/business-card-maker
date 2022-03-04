# Title: Business Card

# Languages: React

# Database: Firebase, Cloudinary

> ## TABLE OF CONTENTS

### 1. About the project

### 2. Details of project

### 3. Reference

---

## 1. About the project

This project is a tool for making business cards.
Overall, this project two pages which is login page and card-making page.

After a user log in with Goolge account or GitHub account, the user is moved to a card-making page which they can generate multiple business card.

---

## 2. Details of project

I used React, Firebase and Cloudinary.

There are two pages : LogIn page and Maker page

### Login Page

![login](https://user-images.githubusercontent.com/64330888/156807547-6a33b61f-1a98-459b-91d8-9cd229c81481.png)

User can login with Google Account or GitHub Account. For this one, I used Firebase Authentication - additional providers (githubProvider and googleProvider)

After signing in, the page is redirected to '/maker' page using React Hook(react-router-dom)

```
     const navigate = useNavigate()
     .
     .
     const goToMaker = () => {navigate('/maker')}
```

### Card-Maker Page

![first1](https://user-images.githubusercontent.com/64330888/156811595-1422cfbf-1751-4f5b-84ac-e93d47b82381.png)

User can type their information and upload their images.
When adding, the information (name, company, theme, title, message) is stored in Firebase Realtime Database and the image is stored in Cloudinary and the Cloudinary returns image URL so the image file name and ULR is stored in Firebase Realtime Database as well.

```
// image_input.js
 async upload(file) {
    const url = 'https://api.cloudinary.com/v1_1/djhlpuabi/image/upload'
    const data = new FormData()
    data.append('file', file)
    data.append('upload_preset', 'nq26orwa')

    const result = await fetch(url, { method: 'POST', body: data }) ///
    return await result.json()
  }

// add.jsx
hanldeImg = async event => {
    const uploaded = await this.props.imageInput.upload(event.target.files[0])
    this.setState({ file: uploaded })
  }
```

![first](https://user-images.githubusercontent.com/64330888/156811341-9c9c3c0b-9275-4051-993a-e0098dcdc52a.png)

When the card created, the Preview part shows the created card by getting data from firebase realtime database

```
//Card_Data.js
load_card(userId, onCallBack) {
    const dbref = ref(db, `${userId}/cards`)
    onValue(dbref, snapshot => {
      const data = snapshot.val()
      if (data) {
        onCallBack(data)
      }
    })
  }

//maker.jsx
this.props.database.load_card(this.state.userId, card => {
        this.handleShow(card)
      })
```

Also after creating a card and when the user changes the information, the card is updated synchronously through onChange method.

---

### Overall Structure

app

- LogIn
- Maker
  - Edit
    - Form
    - Add
  - Preview
    - Card

---

### Firebase, Cloudinary

Firebase - Authentication, Realtime Database
Cloudinary - Uploading with a direct call to the REST API

## 3. References

Dream Coding Lecture

- https://academy.dream-coding.com/

Firebase

- https://firebase.google.com/docs/auth,
- https://firebase.google.com/docs/firestore

Cloudinary

- https://cloudinary.com/documentation/upload_images#uploading_with_a_direct_call_to_the_rest_api

Other Youtube Lectures

- Cloudinary and React : https://www.youtube.com/watch?v=Y-VgaRwWS3o
