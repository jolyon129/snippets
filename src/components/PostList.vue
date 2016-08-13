<template>
    <div class="post-list-view">
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
        <router-view></router-view>
    </div>
</template>

<script>
    import store from '../store/store.js'

    export default{
        data (){
            return {
                Message: 'This is post list view',
                posts: [1, 2]
            }
        },
        route: {
            data(){
                return {
                    posts: store.getPostList(this.$route.params.cat)
                            .then(posts => {
                                console.log(posts)
                                return posts
                            })
                            .catch((err)=> {
                                throw err
                            })
                }

            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .post-list-view
        border solid 1px #ddd
        position relative
        margin-left 130px
</style>