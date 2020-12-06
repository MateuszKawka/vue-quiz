<template>
  <section class="section home">
    <h2 class="section__title ">Welcome!</h2>
    <div class="home__category-picker">
      <p>Pick a category:</p>
      <CategoriesPicker />
    </div>

    <DifficultyPicker class="home__difficulty-picker" />

    <at-button
      type="primary"
      @click.native="startGame"
      class="home__start-button"
    >
      Play game
    </at-button>
    <router-link :to="HIGHSCORES_ROUTE.path" class="home__highscores-link"
      >Highscores</router-link
    >
  </section>
</template>

<script>
import { GET_CATEGORIES } from "@/store/actions.types";
import { INIT_GLOBAL_STATE } from "@/store/mutations.types";
import CategoriesPicker from "@/components/CategoriesPicker";
import { GAME_ROUTE, HIGHSCORES_ROUTE } from "@/router/routes";
import DifficultyPicker from "@/components/DifficultyPicker.vue";

export default {
  name: "Home",
  data: () => ({
    HIGHSCORES_ROUTE,
  }),
  components: {
    CategoriesPicker,
    DifficultyPicker,
  },
  methods: {
    startGame() {
      this.$router.push(GAME_ROUTE.path);
    },
  },
  mounted() {
    this.$store.dispatch(GET_CATEGORIES);
    this.$store.commit(INIT_GLOBAL_STATE);
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  min-height: 100vh;
  height: 100%;

  display: flex;
  flex-flow: column wrap;
  padding-top: 10%;
  text-align: center;
}

.home__category-picker {
  margin-top: 20%;
}

.home__difficulty-picker {
  margin: 10% auto 0 auto;
}

.home__start-button {
  width: 30%;
  min-width: 164px;
  margin: 20% auto 0 auto;
}

.home__highscores-link {
  margin-top: 10%;
}

@media all and (min-width: 900px) {
  .home__category-picker {
    margin-top: 10%;
  }

  .home__difficulty-picker {
    margin: 5% auto 0 auto;
  }

  .home__start-button {
    margin: 10% auto 0 auto;
  }

  .home {
    padding-top: 5%;
  }
}
</style>
