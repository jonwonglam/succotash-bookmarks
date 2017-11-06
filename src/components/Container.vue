<template>
  <div id="app-container" class="flex ">
    <aside class="sidebar">
      <folder-list></folder-list>
    </aside>
    <main class="main-container">
      <header class="header">

      </header>
      <div class="content-container">
        <bookmarks-list></bookmarks-list>
      </div>
    </main class="main-container">
  </div>
</template>

<script>
import BookmarksList from './BookmarksList'
import FolderList from './folders/FolderList'

export default {
  components: {
    BookmarksList,
    FolderList
  }
}
</script>

<style>
  #app-container {
    width: 100%;
    height: 100%;
  }
  .flex {
    display: flex;
  }
  .sidebar {
    border-right: 1px solid #eeeeee;
    height: 100%;
    position: fixed;
    width: 350px;
  }
  .main-container {
    width: 100%;
    height: 100%;
    margin-left: 350px;
  }
  .content-container {
    margin-top: 30px;
  }
  .header {
    border-bottom: 1px solid #eeeeee;
    width: 100%;
    height: 66px;
  }

</style>
