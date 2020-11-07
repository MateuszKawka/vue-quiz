<template>
  <form class="highscore-form">
    <at-input
      v-model="name"
      size="large"
      placeholder="Please input"
      append-button
    >
      <template slot="append">
        <span @click="addHighscore">Add</span>
      </template>
    </at-input>
  </form>
</template>

<script>
export default {
  name: "HighscoreForm",
  data: () => ({
    name: "",
  }),
  methods: {
    addHighscore() {
      this.$emit("add-highscore", this.name);
    },
  },
};
</script>

<style scoped>
.highscore-form {
  margin-top: 5%;
}
</style>
