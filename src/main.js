import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import PostList from './components/PostList.vue'
import Content from './components/Content.vue'

// install router
Vue.use(Router)

let router = new Router()

router.map({
    '/:cat':{
        name: 'cat',
        component: PostList,
        subRoutes:{
            'post/:post':{
                name:'post',
                component:Content
            }
        }
    }
}),

// redirect


router.start(App,'#app')