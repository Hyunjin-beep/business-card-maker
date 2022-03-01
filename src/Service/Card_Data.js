import { app, auth, db } from './Firebase'
import { ref, set, onValue } from 'firebase/database'
class Card_Data {
  save_card(userId, card) {
    set(ref(db, `${userId}/cards/${card.id}`), card)
  }

  delete_card(userId, card) {
    set(ref(db, `${userId}/cards/${card.id}`), null)
    console.log('success')
  }

  load_card(userId, onCallBack) {
    const dbref = ref(db, `${userId}/cards`)
    onValue(dbref, snapshot => {
      const data = snapshot.val()
      if (data) {
        onCallBack(data)
      }
    })
  }
}

export default Card_Data
