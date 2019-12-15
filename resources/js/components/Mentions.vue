<template>
    <div v-if="mentions.length" class="post-mentions">
        <h2>Mentions</h2>
        <ul class="mentions-list" id="mentions-list">
            <template v-for="mention in mentions">
                <li class="mention u-comment h-cite">
                    <div class="u-author pure-g">
                        <img class="mention-photo u-photo pure-u-1-5" :src="mention.data.author.photo" :title="mention.data.author.name" width="40"/>
                        <div class="mention-card pure-u-4-5">
                            <a class="u-author h-card" :href="mention.data.author.url">{{ mention.data.author.name }}</a>
                            <span class="commented muted">{{ activities[mention.activity.type] }}</span>
                            <a class="u-url muted" :href="mention.source">
                                <time class="dt-published" :datetime="mention.verified_date" :title="new Date(mention.verified_date)">{{ vagueTime(mention.data.published) }}</time>
                            </a>
                            <p v-if="mention.data.content" class="p-content" v-html="mention.data.content"/>
                        </div>
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
                // const data = require('./mock.json')

                this.$store.commit('setMentions', {
                    mentions: data.links,
                })
            }
        })
    },
    methods: {
        vagueTime: function (dt) {
            const params = {
                from: Date.now(),
                to: new Date(dt),
            }

            return vagueTime.get(params)
        }
    }
}
</script>

<style scoped>
.post-mentions {
    padding-top: 15px;
    margin-top: 10px;
    border-top: 1px solid #AEADAD;
    border-bottom: 1px solid #AEADAD;
    font-size: 16px;
}

.post-mentions ul {
    list-style: none;
    padding: 0;
    margin-left: 0;
}
</style>
