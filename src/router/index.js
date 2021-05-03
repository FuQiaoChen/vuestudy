import { createRouter, createWebHistory } from 'vue-router'
import test01 from '../views/test01.vue'            //主页不应懒加载
const comprehensive = () => import('../components/test02/tt-01-comprehensive.vue') // 懒加载
const message = () => import('../components/test02/tt-02-message.vue')

const routes = [
  {
    path: '',             //path必须设置为空值
    redirect: '/test01'   //重定向默认跳转位置
  },
  {
    path: '/test01',
    name: 'test01',
    component: test01
  },
  {
    path: '/test02',
    name: 'test02',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/test02.vue'), // 匿名方式的懒加载
    children: [      //路由嵌套
      {
        path: '',                    //path必须设置为空值
        redirect: '/test02/compreh', //重定向默认跳转位置 注意需要写全路径
      },
      {
        path: '/test02/compreh',
        name: 'compreh',
        component: comprehensive,
      },
      {
        path: '/test02/message',
        name: 'message',
        component: message,
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
