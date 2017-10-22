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

import Bookmark from './Bookmark'
import NewBookmark from './NewBookmark'

export default {
  props: [],  // 1-way data binding to the child. Use $emit to send back up to parent
  components: {
    Bookmark,
    NewBookmark
  },
  methods: {
    addBookmark: function (b) {
      let newBookmark = Object.assign({id: this.nextBookmarkId}, b)
      this.bookmarks.unshift(newBookmark)
      this.nextBookmarkId++
    },
    editBookmark: function (bookmark) {
      this.$set(this.bookmarks, bookmark, bookmark)
    },
    deleteBookmark: function (id) {
      this.bookmarks = this.bookmarks.filter(bookmark => {
        return bookmark.id !== id
      })
    }
  },
  data () {
    return {
      nextBookmarkId: 3,
      bookmarks: [  // TODO: Move to vuex
        {
          id: 1,
          title: 'Google',
          url: 'www.google.com'
        },
        {
          id: 2,
          title: 'Yahoo',
          url: 'www.yahoo.com'
        }
      ]
    }
  }
}
</script>
  
<style>
</style>
