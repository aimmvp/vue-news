<template>
    <div>
        <div v-for="item in askItems" v-bind:key="item"> {{ item.title }}</div>
    </div>
</template>

<script>
import { mapGetters} from 'vuex';
// import {fetchAskList} from '../api/index.js';
export default {
    computed: {
        ...mapGetters({
            askItems: 'fetchedAsk'
        }),

        // #2
        // ...mapState({
        //     ask: state => state.ask
        // })
        // #1
        // ask() {
        //     return this.$store.state;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    },
    
}
</script>

<style>

</style>