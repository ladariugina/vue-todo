<template>
  <div class="item-wrap">
    <label class="item">
      <input
        type="checkbox"
        :checked="item.isDone"
        value="Y"
        @change="onClickDone"
      />
      <div class="item__task" :class="{ active: item.isDone }">
        {{ item.value }}
      </div>
    </label>
    <div class="item-delete" @click.prevent="onRemoveTask"></div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onClickDone() {
      this.$store.commit("TASK_CHANGE_IS_DONE", this.item.id);
    },
    onRemoveTask() {
      this.$store.commit("TASK_REMOVE_ITEM", this.item);
    },
  },
};
</script>
