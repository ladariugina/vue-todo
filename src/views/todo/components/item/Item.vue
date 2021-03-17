<template>
  <div class="item-wrap">
    <div class="item">
      <input type="checkbox" :checked="item.isDone" value="Y" @change="onClickDone">
      <div class="item__task" :class="{ active: item.isDone }">{{ item.value }}</div>
    </div>
    <div class="item-delete" @click.prevent="onRemoveTask"></div>
  </div>

</template>

<script>

export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onClickDone() {
      this.$store.commit('TASK_CHANGE_IS_DONE', this.item.id)
      this.$store.commit('TASK_SYNC_ITEMS')
    },
    onRemoveTask() {
      this.$store.commit('TASK_REMOVE_ITEM', this.item)
      this.$store.commit('TASK_SYNC_ITEMS')
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.item-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.item {
  display: flex;
  align-items: center;
}

.item__task {
  padding-left: 10px;
}

.active {
text-decoration: line-through;
}

.item-delete {
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
}

.item-delete::after {
  content: '';
  width: 2px;
  height: 17px;
  background: #f50057;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  left: 0;
}

.item-delete::before {
  content: '';
  width: 2px;
  height: 17px;
  background: #f50057;
  transform: rotate(-45deg);
  position: absolute;
  top: 0;
  left: 0;
}

</style>