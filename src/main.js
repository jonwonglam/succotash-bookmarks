// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex) // Important to enable 'store' variable across component instances

// Breakup Vuex.store into more resuable chunks
// Option: Can also set the namespace if don't want all getters/setters to be global
const bookmarksModule = {
  state: {
    bookmarks: [{
      id: 1,
      title: 'Google',
      url: 'www.google.com'
    }, {
      id: 2,
      title: 'Yahoo',
      url: 'www.yahoo.com'
    }],
    nextBookmarkId: 3
  },
  getters: {
    bookmarks: state => { return state.bookmarks }
  },
  mutations: {
    ADD_BOOKMARK (state, bm) {
      let newBookmark = Object.assign({ id: state.nextBookmarkId }, bm)
      state.bookmarks.unshift(newBookmark)
      state.nextBookmarkId++
    },
    DELETE_BOOKMARK (state, id) {
      state.bookmarks = state.bookmarks.filter(bookmark => {
        return bookmark.id !== id
      })
    },
    EDIT_BOOKMARK (state, bm) {
      Vue.set(state.bookmarks, bm, bm)
    }
  },
  actions: {
    addBookmark (context, bm) {
      context.commit('ADD_BOOKMARK', bm)
    },
    deleteBookmark (context, id) {
      context.commit('DELETE_BOOKMARK', id)
    },
    editBookmark (context, bm) {
      context.commit('EDIT_BOOKMARK', bm)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    bookmarks: bookmarksModule
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
