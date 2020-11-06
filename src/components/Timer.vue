<template>

    <vue-ellipse-progress
      :progress="progress"
      :size="64"
      :color="color"
      :fontColor="fontColor"
      reverse
    >
    </vue-ellipse-progress>
</template>

<script>
export default {
  name: "Timer",
  methods: {
    aa() {
      this.progress = this.progress -= 10;
    },
  },
  data: () => ({
    progress: 100,
    color: "#79a1eb",
    fontColor: "#79a1eb",
  }),
  watch: {
    progress(newValue) {
      console.log(newValue);
      if (newValue < 40) {
        this.color = "#ff6464";
        this.fontColor = "#ff6464";
      }
    },
  },
};
</script>

<style scoped>
.progress {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
