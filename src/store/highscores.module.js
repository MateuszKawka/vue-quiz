import * as fb from "@/common/firebase";
import {
    SET_HIGHSCORES,
    SET_HIGHSCORES_READY,
    SET_HIGHSCORE_ADDED,
    SET_IS_ENOUGH_FOR_HIGHSCORES
} from "./mutations.types";
import {GET_HIGHSCORES, ADD_HIGHSCORE} from "./actions.types";

export default {
    state: {
        highscores: [],
        highscoresReady: false,
        highscoreAdded: false,
        isEnoughForHighscores: false
    },
    mutations: {
        [SET_HIGHSCORES]: (state, highscores) => (state.highscores = highscores),
        [SET_HIGHSCORES_READY]: (state, highscoresReady) =>
            (state.highscoresReady = highscoresReady),
        [SET_HIGHSCORE_ADDED]: (state, highscoreAdded) =>
            (state.highscoreAdded = highscoreAdded),
        [SET_IS_ENOUGH_FOR_HIGHSCORES]: (state, isEnoughForHighscores) => state.isEnoughForHighscores = isEnoughForHighscores
    },
    getters: {
        getLowestHighscore: ({highscores}) => {
            if (highscores) {
                return highscores[highscores.length - 1]
            }
        }
    },
    actions: {
        async [GET_HIGHSCORES]({commit}) {
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
        async [ADD_HIGHSCORE]({dispatch, commit, getters}, {name, score}) {
            await fb.highscoresCollection.doc(getters.getLowestHighscore.id).delete()
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
