<template>
    <v-card
      class="mx-auto"
      width="250"
      :color="color"
      variant="elevated"
      
    >
      <v-card-item>
        <div>
          <div class="text-overline mb-1">{{ ticket.priority }}</div>
          <div class="text-h6 mb-1">{{ ticket.summary }}</div>
          <div class="text-caption">{{ ticket.content }}</div>
        </div>
      </v-card-item>
  
      <v-card-actions>
        <div class="text-caption">{{ ticket.status }}</div>
        <v-btn @click="dialog = true"> Подробнее </v-btn>
      </v-card-actions>
      <TicketPopup :dialog="dialog" @close="close" :ticket="ticket" />
    </v-card>
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import TicketPopup from '@/components/Home/TicketPopup.vue'
  
  export default defineComponent({
    name: "TicketCard",
    components: {
      TicketPopup
    },
    props: {
      ticket: {
          type: Object,
          default: {},
          required: true
      },
    },
    data() {
      return {
          color: "indigo",
          dialog: false,
      }
    },
    mounted() {
      this.checkPriority();
    },
    methods: {
      checkPriority: function () {
          if (this.ticket.priority == "LOW") {
              this.color = "teal"
          } else if (this.ticket.priority == "MED") {
              this.color = "amber"
          } else if (this.ticket.priority == "HIGH") {
              this.color = "deep-orange"
          } else {
              this.color = "indigo"
          }
      },
      close() {
        this.dialog = false
      },
    },
  });
  </script>
  <style>
  .v-card-actions {
    display: flex;
    justify-content: space-between;
  }
  </style>