import { createWebHistory, createRouter } from "vue-router"
import HomePage from './pages/HomePage'
import GameDetails from './pages/GameDetails'
import ViewGames from './pages/ViewGames'
import AboutPage from './pages/AboutPage'

const routes = []

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
