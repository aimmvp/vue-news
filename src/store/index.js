import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
    },
    // mutations: mutations,
    mutations,
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    actions 
});