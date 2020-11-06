import * as fb from '@/common/firebase'
import {SET_HIGHSCORES} from "./mutations.types"
import {GET_HIGHSCORES} from "./actions.types"
export default {
  state: {
      highscores: []
  },
  mutations: {
      [SET_HIGHSCORES]: (state, highscores) => state.highscores = highscores
  },
  actions: {
      [GET_HIGHSCORES]({commit}) {
        fb.highscoresCollection.orderBy('score').onSnapshot(snapshot => {
            let highscores = []
            snapshot.forEach(doc => {
                let highscore = doc.data()
                highscore.id = doc.id

                highscores.push(highscore)
            })
            commit(SET_HIGHSCORES, highscores)
        })
      }
  }
}