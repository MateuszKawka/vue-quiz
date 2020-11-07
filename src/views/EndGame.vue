<template>
  <section class="section endgame">
    <h3 class="section__title">Highscores</h3>
    <p class="endgame__score">Your score is: {{ score }}</p>
    <HighscoreForm v-if="isEnoughForHighscores && !highscoreAdded" @add-highscore="addHighscore"/>
    <div v-else-if="!highscoreAdded">
      <p>You have great result but not enough.</p>
    </div>
    <div v-else>
      <p>Highscore added!</p>
    </div>
    <HighscoresTable />
    <at-button
      type="primary"
      @click.native="tryAgain"
      class="endgame__button"
      to="/"
    >
      Try again
    </at-button>
  </section>
</template>

<script>
import HighscoresTable from "@/components/HighscoresTable";
import HighscoreForm from "@/components/HighscoreForm";
import { HOME_ROUTE } from "@/router/routes";
import { GET_HIGHSCORES, ADD_HIGHSCORE } from "@/store/actions.types";
export default {
  name: "EndgameView",
  computed: {
    score() {
      return this.$store.state.score;
    },
    isEnoughForHighscores() {
      return true;
    },
    highscoreAdded() {
      return this.$store.state.highscores.highscoreAdded
    }
  },
  components: {
    HighscoresTable,
    HighscoreForm,
  },
  methods: {
    tryAgain() {
      this.$router.push(HOME_ROUTE.path);
    },
    addHighscore(name) {
        this.$store.dispatch(ADD_HIGHSCORE, {
          name,
          score: this.score
        })
    }
  },
  mounted() {
    this.$store.dispatch(GET_HIGHSCORES);
  },
};
</script>

<style scoped>
.endgame {
  text-align: center;
}

.endgame__button {
  margin-top: 10%;
}

.endgame__score {
  margin-top: 5%;
}
</style>
