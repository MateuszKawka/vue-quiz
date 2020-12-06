<template>
  <at-radio-group :value="pickedDifficulty" @input="pickDifficulty">
    <at-radio-button label="easy">Easy</at-radio-button>
    <at-radio-button label="medium">Medium</at-radio-button>
    <at-radio-button label="hard">Hard</at-radio-button>
  </at-radio-group>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_DIFFICULTY } from "@/store/mutations.types";

export default {
  name: "CategoriesPicker",
  computed: mapState({
    pickedDifficulty: "pickedDifficulty",
  }),
  methods: {
    ...mapMutations({
      pickDifficulty: SET_DIFFICULTY,
    }),
  },
};
</script>
