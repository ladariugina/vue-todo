<template>
  <div class="todo">
    <h1 class="todo__title">Важные дела:</h1>
    <Filter v-model="onShow" :list="list" />
    <Item v-for="item in tasks" :key="item.id" :item="item" />
    <InputItem />
    <button class="todo__btn" @click.prevent="onRemoveAllDoneTask">
      УДАЛИТЬ ВЫПОЛНЕННЫЕ ДЕЛА
    </button>
  </div>
</template>

<script>
import InputItem from "./components/InputItem.vue";
import Item from "./components/Item.vue";
import Filter from "./components/filter.vue";

export default {
  name: "Todo",
  components: {
    InputItem,
    Item,
    Filter,
  },

  data() {
    return {
      onShow: "Все",
      list: ["Все", "Активные", "Выполненные"],
    };
  },

  mounted() {
    this.$store.dispatch("TASK_FETCH_ITEMS");
  },

  computed: {
    tasks() {
      switch (this.onShow) {
        case "Все":
          return this.$store.state.task.items;
        case "Активные":
          return this.$store.getters.isItemsActive;
        case "Выполненные":
          return this.$store.getters.isItemsDone;
        default:
          return this.$store.state.task.items;
      }
    },
  },

  methods: {
    onRemoveAllDoneTask() {
      this.$store.commit("TASK_REMOVE_ALL_DONE_ITEM");
    },
  },
};
</script>
