<template>
  <div class="filter">
    <label class="filter__btn" v-for="(value, index) in list" :key="index">
      <input
        type="radio"
        :value="value"
        :checked="value == modelValue"
        @change="$emit('update:modelValue', value)"
      />
      <div class="filter__description">
        <span>{{ value + " " }}</span>
        <span>({{ counterTask(value) }})</span>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "Filter",
  props: {
    list: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    counterTask(value) {
      switch (value) {
        case "Все":
          return this.$store.state.task.items.length;
        case "Активные":
          return this.$store.getters.isItemsActive.length;
        case "Выполненные":
          return this.$store.getters.isItemsDone.length;
        default:
          return this.$store.state.task.items.length;
      }
    },
  },
};
</script>
