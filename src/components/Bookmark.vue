<template>
  <div class="column center centered aligned">
    <!-- Normal -->
    <div class="ui centered card" v-if="!isEditing">
      <div class="content">
        <div class="header">{{ bookmark.title }}</div>
        <div class="description">{{ bookmark.url }}</div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <button class="ui basic button" @click="toggleEdit">Edit</button>
          <button class="ui basic button" @click="remove">Remove</button>
        </div>
      </div>
    </div>
    <!-- Edit mode -->
    <div class="ui centered card" v-if="isEditing">
      <div class="content">
        <div class="ui form left aligned">
          <div class="field">
            <label>Title</label>
            <input type="text" v-model="editTitle" placeholder="Title">
          </div>
          <div class="field">
            <label>Url</label>
            <input type="text" v-model="editUrl" placeholder="Url">
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <button class="ui basic button" @click="cancelEdit">Cancel</button>
          <button class="ui basic button" @click="saveEdit">Save</button>
        </div>
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
</style>
