import Vue from 'vue'
import Router from 'vue-router'
// Should switch this import statement to @component and add using
// npm install --save @components/BookmarksList
import BookmarksList from '../components/BookmarksList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: BookmarksList
    }
  ]
})
