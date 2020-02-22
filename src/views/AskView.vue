<template>
    <div>
        <div v-for="ask in asks" v-bind:key="ask"> {{ ask.title }}</div>
    </div>
</template>

<script>
// import {fetchAskList} from '../api/index.js';
import { mapState } from 'vuex';
export default {
    data() {
        return {
            asks: []
        }
    },
    computed: {
        ...mapState({
            asks: state => state.ask
        })
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
        // var vm = this;

        // fetchAskList()
        //     .then(function(response) {
        //         vm.asks = response.data;
        //     })
        //     .catch(function(error) {
        //         console.log(error);
        //     });
        // fetchAskList()
        //     .then(response => this.asks = response.data)
        //     .catch( error => console.log(error));
    },
    
}
</script>

<style>

</style>