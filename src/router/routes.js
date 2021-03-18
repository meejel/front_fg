
const routes = [
  {
    path: '/menu',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/instruments', component: () => import('pages/Index.vue') },
      { path: '/newInstrument', component: () => import('pages/newInstrument.vue') },
      { path: '/newEvidence', component: () => import('pages/newEvidence.vue') },
      { path: '/evaluations', component: () => import('pages/evaluations.vue') },
      { path: '/editInstrument/:id', component: () => import('pages/editInstrument.vue'), name: 'editInstrument' }
    ]
  },
  {
    path: '/',
    component: () => import('pages/login')
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
