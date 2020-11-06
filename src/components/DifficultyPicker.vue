<template>
  <at-radio-group v-model="difficulty">
    <at-radio-button label="easy">Easy</at-radio-button>
    <at-radio-button label="medium">Medium</at-radio-button>
    <at-radio-button label="hard">Hard</at-radio-button>
  </at-radio-group>
</template>

<script>
export default {
    name: "DifficultyPicker",
    data: () => ({
        difficulty: 'easy'
    })
}
</script>
