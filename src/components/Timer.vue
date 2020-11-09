<template>
  <div class="timer at-row">
    <div class="col-12">
      <progress-bar :bar-color="barColor" size="medium" :val="timerValue"></progress-bar>
    </div>
  </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'

export default {
  name: "Timer",
  components: {
    ProgressBar
  },
  props: {
    questionAnswered: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    timerWork() {
      return this.$store.state.timerWork
    }
  },
  methods: {
    startTimer() {
      this.timerID = setInterval(() => {
        console.log('timer')
        if(this.timerValue > 0) {
          this.timerValue -= 10
        }
      }, 1000)
    },
    stopTimer() {
      clearInterval( this.timerID )
    },
    resetTimer() {
      this.timerValue = 100;
      this.startTimer()
    },
    endTime() {
      this.$emit('end-time')
    }
  },
  data: () => ({
    timerValue: 100,
    color: "#79a1eb",
    fontColor: "#79a1eb",
    timerID: 0,
    barColor: "#78a4f4"
  }),
  watch: {
    timerValue(newVal) {
      this.barColor = "#78a4f4";
      if (newVal < 40) {
        this.barColor = "#ff4949"
      }
       if (newVal <= 0) {
         this.stopTimer()
         this.endTime()
      }
    },
    questionAnswered(newVal) {
      if(newVal) {
        this.stopTimer()
      }
    }
  },
  mounted() {
    this.startTimer()
  }
};
</script>

<style scoped>
.timer {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 10% 0;
}
</style>
