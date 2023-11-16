import UserData from "@/components/Profile/UserDataInterface";
import api from './api'

const usersState = {
    state: {
        users: [
            { full_name: 'User Userov', email: 'user@user.ru', login: 'user', password: 'user', user_type: 'user' },
            { full_name: 'Admin Adminov', email: 'admin@admin.ru', login: 'admin', password: 'admin', user_type: 'admin' },
        ] as Array<UserData>,
        cur_user: {} as UserData,
        error: ''
    },
    getters: {
    },
    mutations: {
        SET_USER(state: any, payload: UserData) {
            state.cur_user = payload
            this.commit('SAVE_TO_LOCALSTORAGE')
        },
        LOGIN(state: any, payload: any) {
            for (let i = 0; i < state.users.length; i++) {
                if (state.users[i].login == payload.login) {
                    if (state.users[i].password == payload.password) {
                        state.cur_user = state.users[i]
                        state.error = ''
                        this.commit('SAVE_TO_LOCALSTORAGE')
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
        LOGOUT(state: any) {
            state.cur_user = {}
            localStorage.removeItem('cur_user')
            localStorage.setItem('userType', '');
            localStorage.setItem('isAuth', '');
        },
        SAVE_TO_LOCALSTORAGE(state: any) {
            localStorage.setItem('cur_user', JSON.stringify(state.cur_user));
            localStorage.setItem('userId',state.cur_user.id);
            localStorage.setItem("userType", state.cur_user.user_type);
            localStorage.setItem("isAuth", "true");
        }
    },
    actions: {
        async login({commit}: any, credentials: any) {
            try {
                console.log();
                
                const response = await api.post('/login', credentials);
                commit('SET_USER', response.data.user)
            } catch (error) {
                console.log(error)
                return error;
            }
        },
        async getUserInfo({ commit }: any) {
            try {
                let userId = localStorage.getItem('userId');
                const response = await api.get(`/user/${userId}`);
                commit('SET_USER', response.data.user)
            } catch (error) {
                console.log(error)
                return error;
            }
        },
    },
    modules: {
    }
}

export default usersState