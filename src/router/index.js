import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../Home.vue"
import Job from "../Job.vue"
import About from "../About.vue"
import Tutor from "../components/Tutor.vue"
import Courses from "../components/Courses.vue"

Vue.use(VueRouter)

// const age = 20;
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Job',
    component: Job
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tutor',
    name: 'Tutor',
    component: Tutor
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
//   {
//     // path: '/app/:userid',
//     path: '/app',
//     name: 'App',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//     component:App,
//     children:[
//       {path:'', component:AppHome},
//       {path:'explore', component:AppExplore},
//       {path:'notifications', component:AppNotifications},
//       {path:'messages', component:AppMessage},
//     ]
//   },
//   {
//     path:"/user/:id",
//     component:User,
//     beforeEnter: (to, from, next) => {
//       if(age<18){
//         next(false)
//       }else{
//         next()
//       }
//     }
//   },
  // {
  //   path:"/explore",
  //   name:"Explore",
  //   component:Explore
  // },{
  //   path:"/notifications",
  //   name:"Notifications",
  //   component:Notifications
  // },{
  //   path:"/messages",
  //   name:"Messages",
  //   component:Messages
  // },
//   {
//     path:"*",
//     component:()=>import("../views/NotFound.vue")
//   }
]

const router = new VueRouter({
  mode: "history", 
  routes,
})
// router.beforeEach((to,from,next)=>{
//   // console.log(`Going to ${to} from ${from}`)
//   console.log(to)
//   console.log(from)
//   next()
//   // next(false) restrict router from going to another page.
//   // next can also be used to redirect
// })

export default router
