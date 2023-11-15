<template>
    <div class="d-flex flex-row align-center">
        <v-text-field v-model="msg" placeholder="Type Something" @keypress.enter="send"></v-text-field>
        <v-btn icon class="ml-4" @click="send"><v-icon>mdi-send</v-icon></v-btn>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    emits: ['add'],
    data() {
        return {
            msg: '' as string,
        }
    },
    methods: {
        send: function () {
            this.$emit('add', this.msg);
            this.msg = '';
        }
    }
})
</script>
<style>
    
</style>