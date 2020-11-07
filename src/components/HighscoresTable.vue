<template>
  <at-table
    :columns="columns"
    :data="formatedHighscores"
    v-if="highscoresReady"
    class="highscores-table"
  ></at-table>
  <Spinner v-else />
</template>

<script>
import { formatHighscoreDate } from "@/common/helpers";
import Spinner from "@/components/Spinner";
export default {
  name: "HighscoresTable",
  components: {
    Spinner,
  },
  computed: {
    highscores() {
      return this.$store.state.highscores.highscores;
    },
    highscoresReady() {
      return this.$store.state.highscores.highscoresReady;
    },
    formatedHighscores() {
      return this.highscores.map((highscore) => {
        return {
          ...highscore,
          createdAt: formatHighscoreDate(highscore.createdAt),
        };
      });
    },
  },
  data: () => ({
    columns: [
      {
        title: "Name",
        key: "name",
      },
      {
        title: "Score",
        key: "score",
      },
      {
        title: "Date",
        key: "createdAt",
      },
    ],
  }),
};
</script>

<style scoped>
.highscores-table {
  margin-top: 10%;
}
</style>