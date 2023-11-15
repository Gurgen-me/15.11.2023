import ChatMessage from "./interfaces/ChatMessageInterface"


const chatState = {
    state: {
        chat: JSON.parse(localStorage.getItem('chat') as string) ?? [] as Array<ChatMessage>
    },
    getters: {
    },
    mutations: {
        addMessage(state: any, payload: ChatMessage) {
            if (state.chat.length >= 200) {
                state.chat.shift()
            }
            state.chat.push(payload);
            this.commit('saveToStorage')
        },
        saveToStorage(state: any) {
            localStorage.setItem('chat', JSON.stringify(state.chat));
        }
    },
    actions: {
    },
    modules: {
    }
}

export default chatState