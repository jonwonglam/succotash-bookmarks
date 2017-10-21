<template>
  <div>
    <!-- Normal -->
    <div class="ui card" v-if="!isEditing">
      <h3>{{ bookmark.title }}</h3>
      <p>{{ bookmark.url }}</p>
      <button class="ui button" @click="toggleEdit">Edit</button>
      <button @click="remove">Remove</button>
    </div>
    <!-- Edit mode -->
    <div class="ui card" v-if="isEditing">
      <div class="card-input">
        <label>Title: </label>
        <input type="text" v-model="editTitle"><br>
      </div>
      <div class="card-input">
        <label>Url: </label>
        <input type="text" v-model="editUrl">
      </div>
      <div class="buttons">
        <button @click="cancelEdit">Cancel</button>
        <button @click="saveEdit">Save</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: ['initialBookmark'],
  data () {
    return {
      bookmark: this.initialBookmark,
      isEditing: false,
      editTitle: this.initialBookmark.title,
      editUrl: this.initialBookmark.url
    }
  },
  methods: {
    remove: function () {
      this.$emit('remove', this.bookmark.id)
    },
    toggleEdit: function () {
      this.isEditing = !this.isEditing
    },
    cancelEdit: function () {
      this.editTitle = this.initialBookmark.title
      this.editUrl = this.initialBookmark.url
      this.toggleEdit()
    },
    saveEdit: function () {
      this.bookmark.title = this.editTitle
      this.bookmark.url = this.editUrl
      this.$emit('edit', this.bookmark)
      this.toggleEdit()
    }
  }
}
</script>

<style>
  .card {
    border: 1px solid #cccccc;
    border-radius: 10px;
    margin-bottom: 5px;
    width: 350px;
    padding: 10px;
  }

  .card-input {
    margin-bottom: 5px;
  }
</style>
