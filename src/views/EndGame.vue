<template>
  <section class="section endgame">
    <at-button
        type="primary"
        @click.native="tryAgain"
        class="endgame__button"
        to="/"
    >
      Try again
    </at-button>
    <h3 class="section__title">Highscores</h3>
    <p class="endgame__score">Your score is: {{ score }}</p>
    <HighscoreForm v-if="isEnoughForHighscores && !highscoreAdded" @add-highscore="addHighscore"/>
    <div v-else-if="!highscoreAdded">
      <p>You have great result but not enough.</p>
    </div>
    <div v-else>
      <p>Highscore added!</p>
    </div>
    <HighscoresTable/>
  </section>
</template>

<script>
import HighscoresTable from "@/components/HighscoresTable";
import HighscoreForm from "@/components/HighscoreForm";
import {HOME_ROUTE} from "@/router/routes";
import {GET_HIGHSCORES, ADD_HIGHSCORE} from "@/store/actions.types";
import {SET_IS_ENOUGH_FOR_HIGHSCORES} from "../store/mutations.types";
import {mapState} from "vuex"

export default {
  name: "EndgameView",
  computed: {
    ...mapState({
      score: state => state.score,
      isEnoughForHighscores: state => state.highscores.isEnoughForHighscores,
      highscoreAdded: state => state.highscores.highscoreAdded
    }),
    lowestHighscore() {
      return this.$store.getters.getLowestHighscore
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
  watch: {
    score(newValue) {
      if(this.score > this.lowestHighscore.score) {
        this.$store.commit(SET_IS_ENOUGH_FOR_HIGHSCORES, true)
      }
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
  margin-top: 5%;
}

.endgame__score {
  margin-top: 5%;
}
</style>
