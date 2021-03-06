<template>
  <div class="container-fluid  ">
    <Timer
      @end-time="endTime"
      ref="timer"
      :question-answered="questionAnswered"
    />
    <p class="category" v-html="question.category"></p>
    <p class="question" v-html="question.question"></p>
    <div class="row at-row flex-center">
      <div class="col-22">
        <div class="row at-row answers" ref="answers">
          <button
            size="large"
            class="answer-button col-24 col-md-12"
            v-for="answer in answers"
            :key="`${question.question}__${answer}`"
            @click.stop="answerQuestion"
            :data-answer="answer"
            v-html="answer"
          ></button>
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
          >Next
        </at-button>
        <at-button
          class="next-question-button"
          type="primary"
          @click.native="goToEndgame"
          size="large"
          v-if="lifes <= 0"
          >Go to endgame
        </at-button>
      </div>
    </div>
  </div>
</template>

<script>
import { shuffleAnswers } from "@/common/helpers";
import { mapMutations, mapState } from "vuex";
import { LOSE_LIFE, ADD_POINTS } from "@/store/mutations.types";
import { ENDGAME_ROUTE } from "@/router/routes";
import Timer from "@/components/Timer";

export default {
  name: "Question",
  components: {
    Timer,
  },
  data: () => ({
    questionAnswered: false,
  }),
  computed: {
    ...mapState({
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
        this.badAnswer();
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
    badAnswer() {
      this.showACorrectAnswer();
      this.loseLife();
    },
    nextQuestion() {
      this.$emit("next-question");
      this.$refs.timer.resetTimer();
      this.questionAnswered = false;
    },
    goToEndgame() {
      this.$router.push(ENDGAME_ROUTE.path);
    },
    endTime() {
      this.badAnswer();
      this.questionAnswered = true;
    },
  },
};
</script>

<style scoped>
.answers {
  /* display: flex;
  flex-flow: column wrap; */
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
   margin-top: 0.5rem;
  width:90%;
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
