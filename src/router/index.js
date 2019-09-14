import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage'
import Profile from '@/components/Profile'
import Training from '@/components/Training'
import Battle from '@/components/Battle'
import Highscore from '@/components/Highscore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/training',
      name: 'Training',
      component: Training
    },
    {
      path: '/battle',
      name: 'Battle',
      component: Battle
    },
    {
      path: '/highscore',
      name: 'Highscore',
      component: Highscore
    }
  ]
})
