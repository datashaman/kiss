<template>
    <div v-if="mentions.length" class="post-mentions">
        <ul class="mentions-list" id="mentions-list">
            <template v-for="mention in mentions">
                <li class="mention-social simple">
                    <a :href="mention.data.url">{{ mention.data.author.name }}</a>
                    <span class="commented">{{ activities[mention.activity.type] }}</span>
                    <time :datetime="mention.verified_date">{{ vagueTime({ to: mention.verified_date }) }}</time>
                </li>

                <li class="mention">
                    <div class="mention-author u-author">
                        <img :src="mention.data.author.photo" class="u-photo" :title="mention.data.author.name" width="40">
                        <a :href="mention.data.author.url">{{ mention.data.author.name }}</a>
                        <span class="commented">{{ activities[mention.activity.type] }}</span>
                        <time :datetime="mention.verified_date">{{ vagueTime({ to: mention.verified_date }) }}</time>
                        <div v-if="mention.data.content" class="mention-text">{{ mention.data.content }}</div>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
const jsonp = require('jsonp')
const vagueTime = require('vague-time')
const Vuex = require('vuex')

import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'activities',
            'mentions',
        ]),
    },
    mounted() {
        jsonp("https://webmention.io/api/mentions?per-page=50&page=0&target=" + encodeURIComponent(window.location.href), {
            param: 'jsonp',
        }, (err, data) => {
            if (err) {
                console.error(err)
            } else {
                this.$store.commit('setMentions', {
                    mentions: data.links,
                })
            }
        })
    },
    methods: {
        vagueTime(dt) {
            return vagueTime({ to: dt })
        }
    }
}
</script>
