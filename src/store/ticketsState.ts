import Ticket from "@/components/Home/TicketInterface";

const ticketsState = {
    state: {
        tickets: JSON.parse(localStorage.getItem('tickets') as string) ?? [
            {
                id: 1,
                summary: "Stuck keyboard",
                content: "My keyboard is stuck!!!",
                priority: "MED",
                status: "Working",
                create_date: "2023-10-24T13:11:20.000Z",
                update_date: "2023-10-24T14:16:34.000Z",
                from: "John Doe",
                answ: ""
            },
            {
                id: 2,
                summary: "Dead PC",
                content: "My pc is DEAD!",
                priority: "HIGH",
                status: "Created",
                create_date: "2023-10-24T13:11:20.000Z",
                update_date: "2023-10-24T14:16:34.000Z",
                from: "John Doe",
                answ: ""
            },
            {
                id: 3,
                summary: "Lags in program",
                content: "Some programs lags in VS CODE",
                priority: "LOW",
                status: "Done",
                create_date: "2023-10-24T13:11:20.000Z",
                update_date: "2023-10-24T14:16:34.000Z",
                from: "John Doe",
                answ: "Restert VS CODE"
            },
            {
                id: 4,
                summary: "Broken mouse",
                content: "I think my mouse is broken",
                priority: "MED",
                status: "Done",
                create_date: "2023-10-24T13:11:20.000Z",
                update_date: "2023-10-24T14:16:34.000Z",
                from: "John Doe",
                answ: "Replace mouse"
            },
            {
                id: 5,
                summary: "Frozen PC",
                content: "My pc is frozen!!!",
                priority: "LOW",
                status: "Done",
                create_date: "2023-10-24T13:11:20.000Z",
                update_date: "2023-10-24T14:16:34.000Z",
                from: "John Doe",
                answ: "Restart PC"
            },
            {
                id: 6,
                summary: "Frozen PC",
                content: "My pc is frozen!!!",
                priority: "LOW",
                status: "Created",
                create_date: "2023-10-24T13:11:20.000Z",
                update_date: "2023-10-24T14:16:34.000Z",
                from: "John Doe",
                answ: ""
            },
        ] as Array<Ticket>,
    },
    getters: {
    },
    mutations: {
        addTicket(state: any, payload: Ticket) {

            state.tickets.push(payload);
            this.commit('saveToStorage')
        },
        changeTicket(state: any, payload: any) {

            state.tickets.forEach((ticket: Ticket) => {
                if (ticket.id == payload.id) {
                    let date = new Date();
                    let cur_date = date.getDay() + "-"+ date.getMonth() + "-"+ date.getFullYear()+"|" + date.getHours() + ":"+ date.getMinutes() + ":"+ date.getSeconds()
                    ticket.answ = payload.answ
                    ticket.update_date = cur_date;
                }
            });
            
            this.commit('saveToStorage')
        },
        saveToStorage(state: any) {
            localStorage.setItem('tickets', JSON.stringify(state.tickets));
        }
    },
    actions: {
    },
    modules: {
    }
}

export default ticketsState