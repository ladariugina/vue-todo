<template>
  <div class="todo">
    <h1 class="todo__title">Важные дела:</h1>
    <Filter v-model.capitalize="onShow" />
    <Item v-for="item in tasks" :key="item.id" :item="item" />
    <InputItem />
    <button class="todo__btn" @click.prevent="onRemoveAllDoneTask">
      УДАЛИТЬ ВЫПОЛНЕННЫЕ ДЕЛА
    </button>
  </div>
</template>

<script>
import InputItem from './input-item/InputItem'
import Item from './item/Item'
import Filter from './filter/filter'

export default {
  name: 'Todo',
  components: {
    InputItem,
    Item,
    Filter
  },

  data() {
    return {
      onShow: '',
      list: ['Все', 'Активные', 'Выполненные']
    }
  },

  mounted() {
    this.$store.dispatch('TASK_FETCH_ITEMS')
  },

  computed: {
    tasks() {
      switch(this.onShow){
        case 'Все': return this.$store.state.task.items
        case 'Активные': return this.$store.getters.isItemsActive
        case 'Выполненные': return this.$store.getters.isItemsDone
        default: return this.$store.state.task.items
      }
    },
  },

  methods: {
    onRemoveAllDoneTask() {
      this.$store.commit('TASK_REMOVE_ALL_DONE_ITEM')
      this.$store.commit('TASK_SYNC_ITEMS')
    },
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap')

.todo
  font: 400 16px/18px Roboto, arial, helvetica, sans-serif
  color: #333333
  margin: auto
  max-width: 500px
  padding: 20px
  border-radius: 9px
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%), 0 1px 5px 0 rgb(0 0 0 / 12%)

  &__title
    font: 700 28px Roboto, arial, helvetica, sans-serif
    text-align: center
    color: #f50057
    margin: 0 0 20px


  &__btn
    color: #fff
    background-color: #f50057
    box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)
    min-width: 64px
    box-sizing: border-box
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
    border: 4px solid #f50057
    border-radius: 4px
    text-transform: uppercase
    cursor: pointer
    font: 500 14px/16px Roboto,arial,helvetica,sans-serif
    display: flex
    margin: auto

    &:focus
      outline: none

    &:active
      box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)

.filter
  display: flex
  justify-content: flex-end
  margin-bottom: 15px


  &__btn
    font: 500 12px/14px Roboto, arial, helvetica, sans-serif
    cursor: pointer

  &__description
    padding: 5px 10px

    &:hover
      background: rgba(0, 0, 0, 0.05)
      border-radius: 23px
      padding: 5px 10px
      


input[type="radio"]
  display: none

  &:checked 
    ~ 
      .filter__description
        background: #f50057
        border-radius: 23px
        color: #fff

</style>