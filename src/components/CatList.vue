<template>
    <div class="cat-list-view">
        <p>{{Message}}</p>
        <!--loading-->
        <div v-if="!items.length">Loading ...</div>
        <div v-if="items.length" class="left">
            <ul>
                <li v-for="item in items | orderBy 'name' 1">
                    <a v-link="{ name: 'cat', params: { cat: encodeURI(item.name) }}">
                        {{item.name}}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import store from '../store/store.js'

    export default {
        name: 'cat-list',
        data () {
            return {
                Message: 'This is category list.',
                items: []
            }
        },
        ready () {
            store.getCategoryList().then(items => {
                this.items = items
                var self =this
                this.$router.go({
                    path: '/'+self.items[0].name
                })
                this.$router.redirect({
                    '*':'/'+self.items[0].name
                })
            })

        },
        route: {
            /**
             * http://router.vuejs.org/zh-cn/pipeline/data.html
             * transition.next(data) 会为组件的 data 相应属性赋值
             * data(transition) [-> Promise]
             * 如果返回promise,则会执行resolve(data) -> transition.next(data)
             */
//            data(transition){
//                return {
//                    items: store.getCategoryList().then(items => items)
//                }
//            }
        }
    }
</script>