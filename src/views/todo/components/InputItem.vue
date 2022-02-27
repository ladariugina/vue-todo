<template>
  <div class="input-wrap">
    <div>
      <input
        type="text"
        name="task"
        placeholder="Добавить задание"
        autocomplete="off"
        class="input"
        v-model="value"
      />
    </div>
    <button
      class="button-add"
      @click.prevent="addNewTask"
      :disabled="!value.length > 0"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  name: "InputItem",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    addNewTask() {
      this.$store.commit("TASK_ADD_NEW", this.value);
      this.value = "";
    },
  },
};
</script>
