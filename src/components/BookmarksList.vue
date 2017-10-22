<template>
  <div>
      <div class="ui one column centered grid">
        <new-bookmark @new="addBookmark"></new-bookmark>
      </div>
      <div class="ui one column centered grid">
        <bookmark v-for="bookmark in bookmarks" :initialBookmark="bookmark" :key="bookmark.id"
                  @remove="deleteBookmark"
                  @edit="editBookmark"/>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'  // Vuex shorthand for getters and actions
import Bookmark from './Bookmark'
import NewBookmark from './NewBookmark'

export default {
  props: [],  // 1-way data binding to the child. Use $emit to send back up to parent
  components: {
    Bookmark,
    NewBookmark
  },
  methods: {
    ...mapActions([
      'addBookmark',
      'deleteBookmark',
      'editBookmark'
    ])
  },
  computed: {
    ...mapGetters(['bookmarks'])
  },
  data () {
    return {
    }
  }
}
</script>
  
<style>
</style>
