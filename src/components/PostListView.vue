<template>
    <div class="post-list-view">
        <div class="list-aside">
            <p>{{Message}}</p>
            <div v-if="$loadingRouteData">Loading ...</div>
            <div v-if="!$loadingRouteData">
                <ul>
                    <li v-for="post in posts">
                        <a v-link="{path: '/'+$route.params.cat + '/post/'+ post.name }">
                            {{post.name}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <router-view
                class="sub-view"
                transition="fade"
                keep-alive
                transition-mode="out-in">
        </router-view>
    </div>
</template>

<script>
    import store from '../store/store.js'

    export default{
        data (){
            return {
                Message: 'This is post list view',
                posts:[]
            }
        },
        route: {
            data({to}){
                console.log('Enter PostList Router')
                return {
                    posts: store.getPostList(to.params.cat)
                            .then(posts => posts)
                            .catch((err)=> {
                                throw err
                            })
                }
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>