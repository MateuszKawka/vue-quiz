<template>
  <section class="section container-fluid">
    <h3 class="section__title">Highscores</h3>
    <p>Your score is: {{ score }}</p>
    <HighscoreForm v-if="isEnoughForHighscores" />
    <div v-else>
      <p>You have great result but not enough.</p>
    </div>
    <HighscoresTable />
    <at-button
      type="primary"
      @click.native="tryAgain"
      class="home__start-button"
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
import { GET_HIGHSCORES } from "@/store/actions.types";
export default {
  name: "EndgameView",
  computed: {
    score() {
      return this.$store.state.score;
    },
    isEnoughForHighscores() {
      return true;
    },
  },
  components: {
    HighscoresTable,
    HighscoreForm,
  },
  methods: {
    tryAgain() {
      this.$router.push(HOME_ROUTE.path);
    },
  },
  mounted() {
    this.$store.dispatch(GET_HIGHSCORES);
  },
};
</script>
