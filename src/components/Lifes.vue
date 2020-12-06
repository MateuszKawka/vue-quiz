<template>
  <p class="lifes" ref="lifes">
    <!-- TO REFACTOR -->
    <i class="icon icon-heart" :class="{ 'icon-heart-on': lifes > 0 }"></i>
    <i class="icon icon-heart" :class="{ 'icon-heart-on': lifes > 1 }"></i>
    <i class="icon icon-heart" :class="{ 'icon-heart-on': lifes > 2 }"></i>
  </p>
</template>

<script>
export default {
  name: "Lifes",
  computed: {
    lifes() {
      return this.$store.state.lifes;
    },
  },
};
</script>

<style scoped>
.icon {
  margin-left: 2px;
}
</style>
