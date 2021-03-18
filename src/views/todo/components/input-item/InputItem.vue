<template>
  <div class="input-wrap">
    <div>
      <input 
        type="text" 
        name="task" 
        placeholder="Добавить задание" 
        class="input"
        v-model="value"
      >
    </div>
    <button class="button-add" @click.prevent="addNewTask" :disabled="disableBtn">+</button>
  </div>

</template>

<script>

export default {
  name: 'InputItem',
  data() {
    return {
      value: '',
    }
  },
  computed: {
    disableBtn() {
      return !this.value.length > 0
    },
  },

  methods: {
    addNewTask() {
      this.$store.commit('TASK_ADD', this.value)
      this.value = ''
      this.$store.commit('TASK_SYNC_ITEMS')
    },
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.input-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
}

.input {
  font: 400 16px/18px Roboto, arial, helvetica, sans-serif;
  width: 300px;
  border: none;
  border-bottom: 1px solid #eee;
  padding: 10px;
}

.input:focus {
  outline: none;
}

.button-add {
  font: 400 22px/24px Roboto, arial, helvetica, sans-serif;
  color: #fff;
  background-color: #f50057;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 1px solid #f50057;
  cursor: pointer;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
}

.button-add:focus {
  outline: none;
}

.button-add:active {
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
}

.button-add:hover {
  background-color: #c51162;
}

.button-add:disabled {
  opacity: .6;
}

</style>