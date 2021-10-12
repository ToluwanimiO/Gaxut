import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../Home.vue"
import Job from "../Job.vue"
import About from "../About.vue"
import Tutor from "../components/Tutor.vue"
import Courses from "../components/Courses.vue"
import Blog from '../components/Blog.vue'
import Policy from '../components/Policy.vue'
import Terms from '../components/Terms.vue'
import Help from '../components/Help.vue'
import Beatutor from '../components/Be-A-Tutor.vue'
import BlogDetail from '../components/Blog-Detail.vue'
import Dashboard from '../components/Dashboard.vue'
import JobsAdverts from '../components/Jobs-Adverts.vue'
import Gigs from '../components/Gigs.vue'
import Chats from '../components/Chats.vue'
import Login from '../components/Login.vue'
import Reset from '../components/Reset-password.vue'
import TutorDashboard from '../components/TutorDashboard.vue'
import TutorJobsAd from '../components/TutorJobsAd.vue'
import TutorGig from '../components/TutorGig.vue'
import TutorChat from '../components/TutorChat.vue'
import PostBlog from '../components/Post-Blog.vue'

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
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/beatutor',
    name: 'Beatutor',
    component: Beatutor
  },
  {
    path: '/blog-detail/:blogId',
    name: 'BlogDetail',
    component: BlogDetail
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/jobadverts',
    name: 'JobsAdverts',
    component: JobsAdverts
  },
  {
    path: '/gigs',
    name: 'Gigs',
    component: Gigs
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/reset',
    name: 'Reset',
    component: Reset
  },
  {
    path: '/tutor-dashboard',
    name: 'TutorDashboard',
    component: TutorDashboard
  },
  {
    path: '/tutor-ad',
    name: 'TutorJobsAd',
    component: TutorJobsAd
  },
  {
    path: '/tutor-gig',
    name: 'TutorGig',
    component: TutorGig
  },
  {
    path: '/tutor-chat',
    name: 'TutorChat',
    component: TutorChat
  },
  {
    path: '/post-blog',
    name: 'PostBlog',
    component: PostBlog
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
