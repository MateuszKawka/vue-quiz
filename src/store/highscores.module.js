import * as fb from "@/common/firebase";
import {
  SET_HIGHSCORES,
  SET_HIGHSCORES_READY,
  SET_HIGHSCORE_ADDED,
} from "./mutations.types";
import { GET_HIGHSCORES, ADD_HIGHSCORE } from "./actions.types";
export default {
  state: {
    highscores: [],
    highscoresReady: false,
    highscoreAdded: false,
  },
  mutations: {
    [SET_HIGHSCORES]: (state, highscores) => (state.highscores = highscores),
    [SET_HIGHSCORES_READY]: (state, highscoresReady) =>
      (state.highscoresReady = highscoresReady),
    [SET_HIGHSCORE_ADDED]: (state, highscoreAdded) =>
      (state.highscoreAdded = highscoreAdded),
  },
  actions: {
    async [GET_HIGHSCORES]({ commit }) {
      commit(SET_HIGHSCORES_READY, false);
      await fb.highscoresCollection
        .orderBy("score", "desc")
        .onSnapshot((snapshot) => {
          let highscores = [];
          snapshot.forEach((doc) => {
            let highscore = doc.data();
            highscore.id = doc.id;

            highscores.push(highscore);
          });
          commit(SET_HIGHSCORES, highscores);
          commit(SET_HIGHSCORES_READY, true);
        });
    },
    async [ADD_HIGHSCORE]({ dispatch, commit }, { name, score }) {
      await fb.highscoresCollection.add({
        createdAt: Date.now(),
        name,
        score,
      });
      commit(SET_HIGHSCORE_ADDED, true);
      dispatch(GET_HIGHSCORES);
    },
  },
};
