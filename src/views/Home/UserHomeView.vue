<template>
    <v-container>
        <v-row align="center" justify="center">
            <v-tabs v-model="tab" fixed-tabs>
                <v-tab>
                    Form
                </v-tab>
                <v-tab>
                    History
                </v-tab>
            </v-tabs>
        </v-row>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-row>
                    <v-col>

                        <v-sheet width="300" class="mx-auto">
                            <v-form @submit.prevent>
                                <v-text-field v-model="summary" label="Summary"></v-text-field>
                                <v-textarea v-model="content" label="Content"></v-textarea>
                                <v-select v-model="priority" label="Prority" :items="['LOW', 'MED', 'HIGH', 'CRITICAL']"></v-select>
                                <v-btn @click="addTicket" type="submit" block class="mt-2">Send Ticket</v-btn>
                            </v-form>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-window-item>
            <v-window-item value="2">
                <v-row>
                    <template v-for="ticket in tickets" :key="ticket.id">

                        <TicketCard :ticket="ticket" />

                    </template>
                </v-row>
            </v-window-item>
        </v-window>
    </v-container>
</template>
<script lang="ts">
import { PropType, defineComponent } from 'vue'

import Ticket from '@/components/Home/TicketInterface';
import TicketCard from '@/components/Home/TicketCard.vue';

export default defineComponent({
    components: {
        TicketCard
    },
    data() {
        return {
            tab: 0 as number,
            summary: '' as string,
            content: '' as string,
            priority: '' as string,
            
        }
    },
    props: {

    },
    methods: {
        addTicket: function () {
            let date = new Date();
            let cur_date = date.getDay() + "-"+ date.getMonth() + "-"+ date.getFullYear()+"|" + date.getHours() + ":"+ date.getMinutes() + ":"+ date.getSeconds()
            this.$store.commit('addTicket', {
                id: Date.now(),
                summary: this.summary,
                content: this.content,
                priority: this.priority,
                status: "Created",
                create_date: cur_date,
                update_date: cur_date,
                from: "John Doe",
                answ: ""
            },)
        }
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
    height: 100vh;
}

</style>