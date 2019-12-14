<template>
    <div v-if="mentions.length" class="post-mentions">
        <ul class="mentions-list" id="mentions-list">
            <template v-for="mention in mentions">
                <li class="u-comment h-cite">
                    <div class="u-author">
                        <img class="u-photo" :src="mention.data.author.photo" :title="mention.data.author.name" width="40"/>
                        <a class="u-author h-card" :href="mention.data.author.url">{{ mention.data.author.name }}</a>
                        <span class="commented">{{ activities[mention.activity.type] }}</span>
                        <a class="u-url" :href="mention.source">
                            <time class="dt-published" :datetime="mention.verified_date">{{ vagueTime(mention.verified_date) }}</time>
                        </a>
                        <p v-if="mention.data.content" class="p-content" v-html="mention.data.content"/>
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
