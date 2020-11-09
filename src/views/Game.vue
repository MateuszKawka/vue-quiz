<template>
  <div class="game">
    <div class="game__top-bar">
      <Lifes/>
      <p class="score">Score: {{ score }}</p>
    </div>
    <Question @next-question="nextQuestion" ref="question" v-if="questionReady" key="question"/>
    <Spinner v-else />
  </div>
</template>

<script>
import Question from "@/components/Question";
import Lifes from "@/components/Lifes";
import Spinner from "@/components/Spinner"
import {GET_QUESTIONS} from "@/store/actions.types";
import {SET_QUESTION, SET_QUESTION_READY} from "@/store/mutations.types";

export default {
  name: "Game",
  components: {
    Question,
    Lifes,
    Spinner
  },
  computed: {
    score() {
      return this.$store.state.score;
    },
    questionReady() {
      return this.$store.state.questionReady
    },
    questions() {
      return this.$store.state.questions
    }
  },
  methods: {
    nextQuestion() {
      this.$store.commit(SET_QUESTION_READY, false);
      this.$store.commit(SET_QUESTION);
      this.$store.commit(SET_QUESTION_READY, true);
    }
  },
  mounted() {
    this.$store.commit(SET_QUESTION_READY, false);
    this.$store.dispatch(GET_QUESTIONS).then(() => {
      this.$store.commit(SET_QUESTION);
      this.$store.commit(SET_QUESTION_READY, true);
    });
  },
  watch: {
    questions(newValue) {
      // if questions count is 2 load more
      if(newValue.length === 2) {
        this.$store.dispatch(GET_QUESTIONS)
      }
    }
  }
};
</script>

<style scoped>
.game {
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: flex-start;
}

.game__top-bar {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
}

.score {
  font-weight: 600;
  font-size: 1rem;
}
</style>
