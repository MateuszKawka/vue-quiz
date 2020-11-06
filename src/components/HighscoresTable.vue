<template>
  <at-table :columns="columns" :data="formatedHighscores"></at-table>
</template>

<script>
import { formatHighscoreDate } from "@/common/helpers";

export default {
  name: "HighscoresTable",
  computed: {
    highscores() {
      return this.$store.state.highscores.highscores;
    },
    formatedHighscores() {
      return this.highscores.map((highscore) => {
        return {
          ...highscore,
          createdAt: formatHighscoreDate(highscore.createdAt.seconds)
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
