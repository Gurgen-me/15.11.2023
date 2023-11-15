import UserData from "@/components/Profile/UserDataInterface";


const usersState = {
    state: {
        users: [
            { full_name: 'User Userov', email: 'user@user.ru', login: 'user', password: 'user', user_type: 'user' },
            { full_name: 'Gurgen Melkonyan', email: 'gurgenmelqonyan601@gmail.com', login: 'gurgen228', password: 'gurgen4050', user_type: 'admin' },
            { full_name: 'Admin Adminov', email: 'admin@admin.ru', login: 'admin', password: 'admin', user_type: 'admin' },
        ] as Array<UserData>,
        cur_user: {} as UserData,
        error: ''
    },
    getters: {
    },
    mutations: {
        login(state: any, payload: any) {
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].login == payload.login) {
                    if (state.users[i].password == payload.password) {
                        state.cur_user = state.users[i]
                        state.error = ''
                        this.commit('saveToStorage')
                        break
                    }
                    else {
                        state.error = 'Неправильно введены данные!'
                    }
                } else {
                    state.error = 'Неправильно введены данные!'
                }
            }
            
        },
        logout(state: any) {
            state.cur_user = {}
            localStorage.removeItem('cur_user')
            localStorage.setItem('userType', '');
            localStorage.setItem('isAuth', '');
        },
        saveToStorage(state: any) {
            localStorage.setItem('cur_user', JSON.stringify(state.cur_user));
            localStorage.setItem("userType", state.cur_user.user_type);
            localStorage.setItem("isAuth", "true");
        }
    },
    actions: {
    },
    modules: {
    }
}

export default usersState