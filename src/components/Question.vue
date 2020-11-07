<template>
  <div class="container" v-if="questionReady">
    <p class="category">{{ question.category }}</p>
    <p class="question">{{ question.question }}</p>
    <div class="row at-row flex-center">
      <div class="col-24">
        <div class="answers" ref="answers">
          <button
            size="large"
            class="answer-button"
            v-for="answer in answers"
            :key="answer"
            @click.stop="answerQuestion"
            :data-answer="answer"
          >
            {{ answer }}
          </button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-24 flex-center">
        <at-button
          class="next-question-button"
          type="primary"
          @click="nextQuestion"
          size="large"
          v-if="questionAnswered && lifes > 0"
          >Next</at-button
        >
        <at-button
          class="next-question-button"
          type="primary"
          @click.native="goToEndgame"
          size="large"
          v-if="lifes <= 0"
          >Go to endgame</at-button
        >
      </div>
    </div>
  </div>
  <Spinner v-else />
</template>

<script>
import { shuffleAnswers } from "@/common/helpers";
import { mapMutations, mapState } from "vuex";
import { LOSE_LIFE, ADD_POINTS } from "@/store/mutations.types";
import { ENDGAME_ROUTE } from "@/router/routes";
import Spinner from "@/components/Spinner";
export default {
  name: "Question",
  components: {
    Spinner,
  },
  data: () => ({
    questionAnswered: false,
  }),
  computed: {
    ...mapState({
      questionReady: "questionReady",
      question: "question",
      lifes: "lifes",
    }),
    answers() {
      return shuffleAnswers([
        ...this.question.incorrect_answers,
        this.question.correct_answer,
      ]);
    },
  },
  methods: {
    ...mapMutations({
      loseLife: LOSE_LIFE,
      addPoints: ADD_POINTS,
    }),
    isAnswerCorrect(answer) {
      return this.question.correct_answer === answer;
    },
    answerQuestion(el) {
      const answer = el.target.innerText;
      if (this.isAnswerCorrect(answer)) {
        el.target.classList.add(`answer-button--correct-answer`);
        this.addPoints();
      } else {
        el.target.classList.add(`answer-button--wrong-answer`);
        this.showACorrectAnswer();
        this.loseLife();
      }
      this.questionAnswered = true;
    },
    showACorrectAnswer() {
      this.$refs.answers.childNodes.forEach((el) => {
        if (this.isAnswerCorrect(el.innerText)) {
          el.classList.add(`answer-button--correct-answer`);
        }
        el.disabled = true;
      });
    },
    nextQuestion() {
      this.$emit("next-question");
      this.questionAnswered = false;
    },
    goToEndgame() {
      this.$router.push(ENDGAME_ROUTE.path);
    },
  },
};
</script>

<style scoped>
.answers {
  display: flex;
  flex-flow: column wrap;
}

.category {
  font-weight: 600;
  margin: 1rem 0;
}

.question {
  margin: 1rem 0;
  text-align: center;
  font-size: 1rem;
}
.answer-button {
  margin-top: 0.5rem;
}

.next-question-button {
  margin-top: 2rem;
}

.answer-button {
  font-size: 0.9rem;
  padding: 0.3rem;
  cursor: pointer;
  background: #fff;
  border: 1px solid #bbcdee;
  border-radius: 4px;
}

.answer-button--correct-answer {
  background: #36d57d;
  color: #fff;
  border-color: rgba(0, 0, 0, 0);
}

.answer-button--wrong-answer {
  background: #ff6464;
  color: #fff;
  border-color: rgba(0, 0, 0, 0);
}
</style>
