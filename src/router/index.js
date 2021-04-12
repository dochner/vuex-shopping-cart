import { createRouter, createWebHashHistory } from 'vue-router'
import CartList from '../components/cart/CartListItem'
import ProductList from '../components/product/ProductList'

const routes = [
  {
    path: '/inventory',
    component: ProductList
  },
  {
    path: '/cart',
    component: CartList
  },
  {
    path: '/',
    redirect: '/inventory'
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
