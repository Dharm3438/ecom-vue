import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'
import App from './App.vue'
import Product from './components/Product.vue'
import ProductDetail from './components/ProductDetail.vue'
import Cart from './components/Cart.vue'
import Shipping from './components/Shipping.vue'
import PlaceOrder from './components/PlaceOrder.vue'
import Order from './components/Order.vue'
import paymentSucess from './components/paymentSucess.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Product },
    { path: '/product/:id', component: ProductDetail, props: true },
    { path: '/cart', component: Cart },
    { path: '/shipping', component: Shipping },
    { path: '/placeorder', component: PlaceOrder },
    { path: '/order/:orderId', component: Order, props: true },
    { path: '/paymentsuccess', component: paymentSucess, props: true },
  ]
})

const store = createStore({
  state() {
    return {
      products: [
        {
          id: '1',
          name: 'Nothing Phone 2',
          description:
            '(White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OIS)+50MP | 32MP Front Camera | Qualcomm Snapdragon 8+Gen 1 | 4700 mAh Battery 45W:100% in 55 Minutes',
          price: 500,
          image: 'https://in.nothing.tech/cdn/shop/files/Phone-2-PDP-Glyph-Header-Desktop.jpg?v=1688994743&width=1920',
          status: 1,
          reviews: [
            {
              stars: 5,
              comment: 'Smooth and pleasant to use. Built quality is good',
            },
          ],
        },
        {
          id: '2',
          name: 'Nothing Phone 2',
          description:
            '(White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OIS)+50MP | 32MP Front Camera | Qualcomm Snapdragon 8+Gen 1 | 4700 mAh Battery 45W:100% in 55 Minutes',
          price: 1000,
          image: 'https://m.media-amazon.com/images/I/51zVHtA8ULL._SX300_SY300_QL70_FMwebp_.jpg',
          status: 1,
          reviews: [
            {
              stars: 5,
              comment: 'Smooth and pleasant to use. Built quality is good',
            },
          ],
        },
        {
          id: '3',
          name: 'Nothing Phone 2',
          description:
            '(White, 12GB RAM, 512GB Storage) | 6.7 Inch LTPO OLED AMOLED Display | 50 MP(OIS)+50MP | 32MP Front Camera | Qualcomm Snapdragon 8+Gen 1 | 4700 mAh Battery 45W:100% in 55 Minutes',
          price: 2000,
          image: 'https://www.91-img.com/pictures/157926-v3-nothing-phone-2-512gb-mobile-phone-large-1.jpg?tr=q-80',
          status: 1,
          reviews: [
            {
              stars: 5,
              comment: 'Smooth and pleasant to use. Built quality is good',
            },
          ],
        },
      ],
      cart: [],
      cartAddress: '',
      orders: [],
    }
  }
})


app.use(store)
app.use(router)
app.mount('#app')
