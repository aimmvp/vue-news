<template>
    <div>
        <div v-for="item in this.$store.state.news" v-bind:key="item">{{item.title}}</div>
    </div>
</template>

<script>
// import { fetchNewsList } from '../api/index.js'

export default {
    // data() {
    //     return {
    //         news: []
    //     }
    // },
    created() {
        this.$store.dispatch('FETCH_NEWS');
        // fetchNewsList()
        //     .then(response => this.news = response.data)
        //     .catch(error => console.log(error));
    },
}
</script>

<style>

</style>