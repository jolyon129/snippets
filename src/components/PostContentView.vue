<template>
    <div class="post-content-view">
        <div v-if="$loadingRouteData">Loading ...</div>
        <div v-if="!$loadingRouteData" class="markdown-post-content">
            {{{content}}}
        </div>
    </div>
</template>

<script>
    import store from '../store/store.js'
    export default{
        data(){
            return{
                content:{}
            }
        },
        route: {
            data({to}){
                console.log('Enter Content router')
                return {
                    content: store.getPostContent(to.params.cat,to.params.title)
                            .then(post=>post)
                            .catch((err)=>{
                                throw err
                            })
                }

            },
            canDeactivate(){
                console.log('Deactivate Content router')
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>