import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import CatList from './components/CatList.vue'
// install router
Vue.use(Router)

let router = new Router()

router.map({
    '/cats':{
        component:CatList
    }
})

// default redirect
router.redirect({
    '*': '/cats'
});

router.start(App,'#app')