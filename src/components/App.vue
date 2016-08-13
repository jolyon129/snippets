<template>
    <div>
        <h1>{{Message}}</h1>
        <router-view
                class="view"
                transition
                transition-mode="out-in">
        </router-view>
    </div>
</template>

<script>
export default {
    name:'app',
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