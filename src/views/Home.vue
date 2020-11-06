<template>
  <section class="container-fluid">
    <div class="row at-row">
      <div class="col-24">
        <p>Welcome!</p>
      </div>
      <div class="col-24">
        <CategoriesPicker />
      </div>
      <div class="col-24">
        <DifficultyPicker />
      </div>
      <div class="col-24">
        <at-button type="primary" @click.native="startGame">
          Play game
        </at-button>
      </div>
    </div>
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
