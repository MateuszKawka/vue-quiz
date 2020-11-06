<template>
  <at-select :value="pickedCategory" @input="pickCategory" size="large">
    <at-option :value="0">All</at-option>
    <at-option
      v-for="category in categories"
      :key="category.id"
      :value="category.id"
      >{{ category.name }}</at-option
    >
  </at-select>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { SET_CATEGORY_ID } from "@/store/mutations.types";

export default {
  name: "CategoriesPicker",
  data: () => ({
    pickedCategory: 0,
  }),
  computed: mapState({
    categories: (state) => state.categories,
  }),
  methods: {
    ...mapMutations({
      pickCategory: SET_CATEGORY_ID,
    }),
  },
};
</script>
