import Vue from 'vue'
import Router from 'vue-router'
import Container from '../components/Container'

// Should switch this import statement to @component and add using
// npm install --save @components/BookmarksList

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Container
    }
  ]
})
