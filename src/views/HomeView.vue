<template>
    <AdminHomeView v-if="userType == 'admin'" />
    <UserHomeView v-if="userType == 'user'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AdminHomeView from './Home/AdminHomeView.vue';
import UserHomeView from './Home/UserHomeView.vue';
import Ticket from '@/components/Home/TicketInterface';

export default defineComponent({
    components: {
        AdminHomeView,
        UserHomeView
    },
    data() {
        return {
            userType: '' as String,
            

        }
    },
    mounted() {
        this.userType = localStorage.getItem('userType') ?? 'user'
    },

})
</script>
<style>
.v-window {
  margin-top: 10px;
}

.v-row {
  margin: 0 !important;
}
</style>