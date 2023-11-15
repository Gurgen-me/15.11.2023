<template>
    <v-container>
        <v-row align="center" justify="center">
        <v-tabs v-model="tab" fixed-tabs >
            <v-tab>
                Active
            </v-tab>
            <v-tab>
                Done
            </v-tab>
        </v-tabs>
    </v-row>
    <v-window v-model="tab">
        <v-window-item value="1">
            <v-row>
                <template v-for="ticket in tickets" :key="ticket.id">
                    <v-col v-show="ticket.status == 'Created' || ticket.status == 'Working'" cols="auto">
                        <TicketCard :ticket="ticket" />
                    </v-col>
                </template>
            </v-row>
        </v-window-item>
        <v-window-item value="2">
            <v-row>
                <template v-for="ticket in tickets" :key="ticket.id" >
                    <v-col v-show="ticket.status == 'Done'" cols="auto" >
                        <TicketCard :ticket="ticket" />
                    </v-col>
                </template>
            </v-row>
        </v-window-item>
    </v-window>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import Ticket from '@/components/Home/TicketInterface';
import TicketCard from '@/components/Home/TicketCard.vue';

export default defineComponent({
    components: {
        TicketCard
    },
    data() {
        return {
            tab: 0 as number
        }
    },
    props: {

    },
    computed: {
        tickets: function () {
            return this.$store.state.ticketsState.tickets
        }
    }
})
</script>
<style>
.v-window {
  margin-top: 10px;
}
</style>