<template>
  <div class="folder-list">
    <h1>Folders</h1>
    <ul>
      <li v-for="folder in folders" :key="folder.id">
        {{ folder.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      folders: [
        {
          id: 1,
          title: 'Design'
        },
        {
          id: 2,
          title: 'Wedding Planning'
        },
        {
          id: 3,
          title: 'Restauraunts'
        }
      ]
    }
  }
}
</script>

<style>
  .folder-list {
    font-size: 16px;
    padding: 30px 50px;
  }
  .folder-list h1 {
    font-size: 2.5em;
    font-weight: normal;
    text-align: left;
  }
  .folder-list li {
    font-size: 18px;
    list-style-type: none;
    padding: 10px 0;
    text-align: left;
  }
</style>
