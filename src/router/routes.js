
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'products', component: () => import('pages/Products.vue') },
      { path: 'history', component: () => import('pages/History.vue') },
      { path: 'finish', component: () => import('pages/Finish.vue') },,
      { path: 'success', component: () => import('pages/Success.vue') },
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
