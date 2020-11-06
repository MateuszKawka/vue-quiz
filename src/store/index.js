import Vue from "vue";
import Vuex from "vuex";
import {
  SET_QUESTIONS,
  SET_CATEGORIES,
  SET_QUESTION,
  SET_QUESTION_READY,
  ADD_SCORE,
  SET_CATEGORY_ID,
  LOSE_LIFE,
  ADD_POINTS,
  SET_DIFFICULTY,
} from "./mutations.types";
import { GET_CATEGORIES, GET_QUESTIONS } from "./actions.types";
import {
  CATEGORIES_LIST_PATH,
  QUESTIONS_PATH,
  DIFFICULTIES,
} from "@/common/consts";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    question: {},
    questions: [],
    categories: [],
    categoryID: 0,
    questionReady: false,
    lifes: 3,
    score: 0,
    pickedDifficulty: "easy",
  },
  mutations: {
    [SET_QUESTIONS]: (state, questions) =>
      (state.questions = [state.questions, ...questions]),
    [SET_QUESTION]: (state) => (state.question = state.questions.pop()),
    [SET_CATEGORIES]: (state, categories) => (state.categories = categories),
    [SET_CATEGORY_ID]: (state, categoryID) => (state.categoryID = categoryID),
    [SET_DIFFICULTY]: (state, difficulty) =>
      (state.pickedDifficulty = difficulty),
    [SET_QUESTION_READY]: (state, questionReady) =>
      (state.questionReady = questionReady),
    [ADD_SCORE]: (state, additionalPoints) => (state.score += additionalPoints),
    [LOSE_LIFE]: (state) => (state.lifes -= 1),
    [ADD_POINTS]: (state) => {
      switch (state.pickedDifficulty) {
        case DIFFICULTIES.EASY:
          state.score += 2;
          break;
        case DIFFICULTIES.MEDIUM:
          state.score += 4;
          break;
        case DIFFICULTIES.HARD:
          state.score += 6;
          break;
      }
    },
  },
  actions: {
    async [GET_CATEGORIES]({ commit }) {
      await fetch(CATEGORIES_LIST_PATH)
        .then((response) => response.json())
        .then(({ trivia_categories }) =>
          commit(SET_CATEGORIES, trivia_categories)
        );
    },
    async [GET_QUESTIONS]({ state, commit }) {
      state.questionsReady = false;
      await fetch(
        `${QUESTIONS_PATH}&category=${state.categoryID}&difficulty=${state.pickedDifficulty}`
      )
        .then((response) => response.json())
        .then(({ results }) => commit(SET_QUESTIONS, results));
    },
  },
  modules: {},
});
