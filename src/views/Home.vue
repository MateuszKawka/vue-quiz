<template>
  <section class="container-fluid home">
    <p>Welcome!</p>

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
  </section>
</template>

<script>
import { GET_CATEGORIES } from "@/store/actions.types";
import CategoriesPicker from "@/components/CategoriesPicker";
import { GAME_ROUTE } from "@/router/routes";
import DifficultyPicker from "@/components/DifficultyPicker.vue";

export default {
  name: "Home",
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
  margin-top: 20%;
}
</style>
