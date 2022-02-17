import { app, auth, db } from './Firebase'
import { ref, set } from 'firebase/database'
class Card_Data {
  save_card(userId, card) {
    set(ref(db, `${userId}/cards/${card.id}`), card)
  }

  delete_card(userId, card) {
    set(ref(db, `${userId}/cards/${card.id}`), null)
    console.log('success')
  }
}

export default Card_Data
