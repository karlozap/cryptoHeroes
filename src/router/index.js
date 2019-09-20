import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import Signup from '@/components/Signup'
import Profile from '@/components/Profile'
import Battle from '@/components/Battle'
import Highscore from '@/components/Highscore'
import Training from '@/components/Training'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'startpage',
      component: StartPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/battle',
      name: 'battle',
      component: Battle
    },
    {
      path: '/highscore',
      name: 'highscore',
      component: Highscore
    },
    {
      path: '/training',
      name: 'training',
      component: Training
    }
  ]
})
