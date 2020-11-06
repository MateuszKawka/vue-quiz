<template>
  <section class="section highscores">
    <router-link :to="HOME_ROUTE.path">Back to home</router-link>
    <h3 class="section__title">Highscores</h3>
    <HighscoresTable />
  </section>
</template>

<script>
import HighscoresTable from "@/components/HighscoresTable";
import { HOME_ROUTE } from "@/router/routes";
import { GET_HIGHSCORES } from "@/store/actions.types";
export default {
  name: "HighscoresView",
  data: () => ({
    HOME_ROUTE,
  }),
  components: {
    HighscoresTable,
  },
  mounted() {
    this.$store.dispatch(GET_HIGHSCORES);
  }
};
</script>

<style scoped>
.highscores {
  text-align: center;
  padding-top: 5%;
}
</style>
