<template>
    <div :class="['d-flex flex-row align-center my-2', item.from == 'user' ? 'justify-end' : null]">
        <span v-if="item.from == 'user'" class="blue--text mr-3">{{ item.msg }}</span>
        <v-avatar :color="item.from == 'user' ? 'indigo' : 'red'" size="36">
            <span class="white--text">{{ item.from[0] }}</span>
        </v-avatar>
        <span v-if="item.from != 'user'" class="blue--text ml-3">{{ item.msg }}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChatMessage from '@/store/interfaces/ChatMessageInterface'

export default defineComponent({
    props: {
        item: {
            type: Object,
            required: true
        }
    }
})
</script>
<style lang="">
    
</style>@/store/interfaces/ChatMessageInterface