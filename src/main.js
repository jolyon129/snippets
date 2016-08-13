import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import HomeView from './components/home.vue'
// install router
Vue.use(Router)

let router = new Router()

router.map({
    '/home':{
        component:HomeView
    }
})

router.redirect({
    '*': '/home'
});

router.start(App,'#app')