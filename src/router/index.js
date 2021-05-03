import { createRouter, createWebHistory } from 'vue-router'
// import test01 from '../views/test01.vue'            //直接导入
// const test01=() => import('../views/test01.vue')   //懒加载，只在在路由中才有懒加载一说

const routes = [   //里面创建的都是每一个route实例，里面的数据可以用$route来引用
  {
    path: '',             //path必须设置为空值
    redirect: '/test01'   //重定向默认跳转位置
  },
  {
    path: '/test01',
    name: 'test01',      //此处的name可以不写,只是为了在导航守卫中调用
    meta: {              //加入元数据属性，放入一些自定义数据，以便在路由时在导航守卫中调用
      title:'基本组件'
    },
    component: () => import('../views/test01.vue')
  },
  {
    path: '/test02',
    name: 'test02',
    meta: {              
      title:'路由嵌套'
    },
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
        component: () => import('../components/test02/tt-01-comprehensive.vue')//匿名方式的懒加载
      },
      {
        path: '/test02/message',
        name: 'message',
        component: () => import('../components/test02/tt-02-message.vue')
      },
    ],
  },
  {
    path: '/test03',
    name: 'test03',      
    meta: {              
      title:'路由数据'
    },
    component: () => import('../views/test03.vue')
  },
  {
    path: '/test04-tabbar',
    name: 'test04',      
    meta: {              
      title:'实例练习'
    },
    component: () => import('../views/test04-tabbar.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//router的导航守卫功能，相当于生命周期函数的回调hook，所以也可用created周期函数来实现
router.beforeEach((to, from, next) => {  //页面跳转前调用此函数
  // console.log(to);       //查看to对象的数据
  // document.title=to.name
  document.title=to.matched[0].meta.title
  next()//必须调用next函数，否则不能跳转，可以默认跳转也可以自定义跳转路径
})
// router.beforeEach((to, from, next) => { next()}) 
//before为前置钩子（hook），因此还有后置钩子aftereach
// router.afterEach((to, from) => { })  //不用调next函数



export default router
