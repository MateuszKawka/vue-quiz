<template>
  <div class="container" v-if="questionReady">
    <p class="category">{{ question.category }}</p>
    <p class="question">{{ question.question }}</p>
    <div class="row at-row flex-center">
      <div class="col-24">
        <div class="answers" ref="answers">
          <at-button
            size="large"
            class="answer-button"
            v-for="answer in answers"
            :key="answer"
            @click="answerQuestion"
            :data-answer="answer"
          >
            {{ answer }}
          </at-button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-24 flex-center">
        <at-button
          class="next-question-button"
          type="primary"
          @click.native="nextQuestion"
          size="large"
          v-if="questionAnswered"
          >Next</at-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { shuffleAnswers } from "@/common/helpers";

export default {
  name: "Question",
  data: () => ({
    questionAnswered: false,
  }),
  computed: {
    questionReady() {
      return this.$store.state.questionReady;
    },
    question() {
      return this.$store.state.question;
    },
    answers() {
      return shuffleAnswers([
        ...this.question.incorrect_answers,
        this.question.correct_answer,
      ]);
    },
  },
  methods: {
    isAnswerCorrect(answer) {
      return this.question.correct_answer === answer;
    },
    answerQuestion(el) {
      const answer = el.target.innerText;
      if (this.isAnswerCorrect(answer)) {
        el.target.classList.add(`at-btn--success`);
      } else {
        el.target.classList.add(`at-btn--error`);
        this.showACorrectAnswer();
      }
      this.questionAnswered = true;
    },
    showACorrectAnswer() {
      this.$refs.answers.childNodes.forEach((el) => {
        if (this.isAnswerCorrect(el.innerText)) {
          el.classList.add(`at-btn--success`);
        }
      });
    },
    nextQuestion() {
      this.$emit("next-question");
      this.questionAnswered = false;
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
</style>
