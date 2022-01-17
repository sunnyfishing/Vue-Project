/*
 * @Author: your name
 * @Date: 2021-04-28 15:05:22
 * @LastEditTime: 2021-04-28 15:47:16
 * @LastEditors: Please set LastEditors
 * @Description: 创建router实例
 * @FilePath: 
 */

import VueRouter from 'vue-router'

import User from '@/components/forRouter/User'
import UserProfile from '@/components/forRouter/UserProfile'
import UserPosts from '@/components/forRouter/UserPosts'

const routes = [

  // 嵌套路由
  {
    path:'/user/:id',
    component:User,
    children:[
      {
        // 当 /user/:id/profile 匹配成功， UserProfile 会被渲染在 User 的 <router-view> 中
        path:'profile',
        component:UserProfile
      },
      {
        path:'posts',
        component:UserPosts
      }
    ],
  }
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router