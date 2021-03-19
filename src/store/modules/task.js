const state = {
  items: [],
};

const getters = {
  isItemsActive: (state) => {
    return state.items.filter((item) => !item.isDone);
  },
  isItemsDone: (state) => {
    return state.items.filter((item) => item.isDone);
  },
};

const actions = {
  TASK_FETCH_ITEMS({ commit }) {
    return new Promise((resolve) => {
      let items = localStorage.getItem("items");
      items = items ? JSON.parse(items) : [];

      commit("TASK_ADD_ITEMS", items);
      resolve();
    });
  },
};

const mutations = {
  TASK_ADD(state, value) {
    const task = {
      value: "",
      isDone: false,
      id: null,
    };

    task.value = value;
    task.id = new Date();

    state.items.push(task);
  },

  TASK_REMOVE_ITEM(state, task) {
    const index = state.items.findIndex((item) => item.id === task.id);
    state.items.splice(index, 1);
    this.$store.commit("TASK_SYNC_ITEMS");
  },

  TASK_REMOVE_ALL_DONE_ITEM(state) {
    const list = state.items.filter((item) => item.isDone !== true);
    state.items = list;
    this.$store.commit("TASK_SYNC_ITEMS");
  },

  TASK_CHANGE_IS_DONE(state, id) {
    const task = state.items.find((item) => item.id === id);
    task.isDone = !task.isDone;
    this.$store.commit("TASK_SYNC_ITEMS");
  },

  TASK_SHOW_ITEMS(state, onShow) {
    state.showItems = onShow;
  },

  TASK_ADD_ITEMS(state, items) {
    state.items = items;
    this.$store.commit("TASK_SYNC_ITEMS");
  },

  TASK_SYNC_ITEMS(state) {
    const items = state.items;

    if (items.length) localStorage.setItem("items", JSON.stringify(items));
    else localStorage.setItem("items", JSON.stringify([]));
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
