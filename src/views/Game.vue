<template>
  <div class="game">
    <div class="game__top-bar">
      <Lifes />
      <p class="score">Score: {{score}}</p>
    </div>
    <Timer />
    <Question @next-question="nextQuestion"/>
  </div>
</template>

<script>
import Question from "@/components/Question";
import Lifes from "@/components/Lifes";
import Timer from "@/components/Timer";
import { GET_QUESTIONS } from "@/store/actions.types";
import { SET_QUESTION, SET_QUESTION_READY } from "@/store/mutations.types";
export default {
  name: "Game",
  components: {
    Question,
    Lifes,
    Timer,
  },
  computed: {
    score() {
      return this.$store.state.score
    }
  },
  methods: {
    nextQuestion() {
      this.$store.commit(SET_QUESTION);
      this.$store.commit(SET_QUESTION_READY, true);
    },
  },
  mounted() {
    this.$store.dispatch(GET_QUESTIONS).then(() => {
      this.$store.commit(SET_QUESTION);
      this.$store.commit(SET_QUESTION_READY, true);
    });
  },
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
