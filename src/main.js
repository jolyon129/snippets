import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import PostListView from './components/PostListView.vue'
import PostContentView from './components/PostContentView.vue'

// install router
Vue.use(Router)

let router = new Router()

router.map({
    '/:cat':{
        name: 'cat',
        component: PostListView,
        subRoutes:{
            'post/:title':{
                name:'post',
                component:PostContentView
            }
        }
    }
}),

// redirect


router.start(App,'#app')