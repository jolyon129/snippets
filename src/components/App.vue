<template>
    <div>
        <h1>{{Message}}</h1>
        <router-view
                class="view"
                transition
                keep-alive
                transition-mode="out-in">
        </router-view>
    </div>
</template>

<script>
import CatList from './CatList.vue'


export default {
    name:'app',
    components:{
        CatList
    },
    data () {
        return{
            Message: 'This is a collection of my snippets'
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

h1
    font-size 20px

</style>