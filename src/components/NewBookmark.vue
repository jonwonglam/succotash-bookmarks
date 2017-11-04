<template>
  <div>
    <div>
      <button class="ui primary button" @click="toggleNew"><i class="plus icon"></i> Add Bookmark</button>
    </div>
    <div class="ui card" v-if="isOpen">
      <div class="content">
        <div class="ui form left aligned">
          <div class="field">
            <label>Title</label>
            <input type="text" v-model="title" placeholder="Title">
          </div>
          <div class="field">
            <label>Url</label>
            <input type="text" v-model="url" @keyup.enter="save" placeholder="URL">
          </div>
        </div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <button class="ui basic button" @click="close">Cancel</button>
          <button class="ui basic button" @click="save">Done</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleNew: function () {
      this.isOpen = !this.isOpen
    },
    close: function () {
      this.resetInput()
      this.toggleNew()
    },
    save: function () {
      // TODO: Error checking
      var args = {
        title: this.title,
        url: this.url
      }
      this.$emit('new', args)
      this.close()
    },
    resetInput: function () {
      this.title = ''
      this.url = ''
    }
  },
  data () {
    return {
      title: '',
      url: '',
      isOpen: false
    }
  }
}
</script>
