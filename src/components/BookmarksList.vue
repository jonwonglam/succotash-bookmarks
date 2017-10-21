<template>
  <div>
      <div>
          <input type="text" v-model="newUrl" @keyup.enter="addBookmark">
          <button @click="addBookmark">Add</button>
      </div>
      <div class="card-container">
        <bookmark v-for="bookmark in bookmarks"
                  :initialBookmark="bookmark" 
                  :key="bookmark.id"
                  @remove="deleteBookmark"
                  @edit="editBookmark"/>
      </div>
  </div>
</template>

<script>

import Bookmark from './Bookmark'

export default {
  props: [],  // 1-way data binding to the child. Use $emit to send back up to parent
  components: {
    Bookmark
  },
  methods: {
    addBookmark: function () {
      if (this.newUrl) {
        let newBookmark = {
          id: this.newBookmarkId,
          title: 'null',
          url: this.newUrl
        }
        this.bookmarks.push(newBookmark)
        this.newBookmarkId++
        this.newUrl = ''
      }
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
      newBookmarkId: 3,
      newUrl: '',
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
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
