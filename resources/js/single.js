import Vue from 'vue'
import Vuex from 'vuex'

require('./bootstrap')

Vue.use(Vuex)
Vue.component('mentions', require('./components/Mentions.vue').default)

const store = new Vuex.Store({
    state: {
        mentions: [],
        activities: {
            like: 'liked this',
            link: 'linked to this',
            repost: 'reposted this',
            reply: 'replied to this',
        },
    },
    mutations: {
        addMention(state, payload) {
            state.mentions.push(payload.mention)
        },
        setMentions(state, payload) {
            state.mentions = payload.mentions
        },
    },
})

new Vue({
    el: '#app',
    store,
})
