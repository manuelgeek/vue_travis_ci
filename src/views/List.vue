/* eslint-disable */
<template>
  <div>
    <h1>My To Do List</h1>
    <br>
    <input v-model="newItem" >
    <button @click="addItemToList">Add</button>
    <!-- displays list --> 
    <ul>
      <li v-for="(item, index) in listItems" :key='index'>{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      listItems: ['buy food', 'play games', 'sleep'],
      newItem: ''
    }
  },
  methods: {
      addItemToList() {
        this.listItems.push(this.newItem);
        this.newItem = '';
      }
  }
}
</script>
