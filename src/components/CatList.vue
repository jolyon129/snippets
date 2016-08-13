<template>
    <div class="cat-list">
        <p>{{Message}}</p>
        <!--loading-->
        <div v-if="$loadingRouteData">Loading ...</div>
        <div v-if="!$loadingRouteData">
            <ul>
                <li v-for="item in items | orderBy 'name' -1">
                    <a>
                        <!--<a v-link="{ name: 'post', params: { title: encodeURI(item.name) }}">-->
                        {{item.name}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import store from '../store/index.js'

    export default {
        name: 'cat-list',
        data () {
            return {
                Message: 'This is category list.',
                items: []
            }
        },
        route: {
            /**
             * http://router.vuejs.org/zh-cn/pipeline/data.html
             * transition.next(data) 会为组件的 data 相应属性赋值
             * data(transition) [-> Promise]
             * 如果返回promise,则会执行resolve(data) -> transition.next(data)
             */
            data(transition){
                return {
                    items: store.getCategoryList().then(items => items)
                }
            }
        }
    }
</script>