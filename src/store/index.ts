import Ticket from '@/components/Home/TicketInterface'
import { createStore } from 'vuex'
import ticketsState from './ticketsState'
import chatState from './chatState'
import usersState from './usersState'

export default createStore({
  state: {
    
  },
  getters: {
  },
  mutations: {
   
  },
  actions: {
  },
  modules: {
    ticketsState: ticketsState,
    chatState: chatState,
    usersState: usersState
  }
})
