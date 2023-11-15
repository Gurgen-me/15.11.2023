<template>
  <div class="loginBlock">
    <v-sheet width="300" class="mx-auto">
      <v-form @submit.prevent>
        <v-text-field v-model="login" :rules="rules" label="Login" />
        <v-text-field type="password" v-model="pass" :rules="rules" label="Pass" />
        <v-btn color="indigo" type="submit" block class="mt-2" @click="loginFunc">Войти</v-btn>
        <p>{{ errMsg }}</p>
      </v-form>
    </v-sheet>
  </div>
</template>
<script lang="ts">
import router from '@/routes';
import { defineComponent } from 'vue'

export default defineComponent({
  name: "LoginView",
  data: () => ({
    login: '' as string,
    pass: '' as string,
    errMsg: '' as string,
    rules: [
      (value: string) => {
        if (value) return true

        return 'You must enter a valid value.'
      },
    ],
  }),
  methods: {
    loginFunc: function () {
      this.$store.commit('login', { login: this.login, password: this.pass });
      if (this.$store.state.usersState.error != '') {
        console.log(this.$store.state.usersState.error)
        this.errMsg = 'Произошла ошибка!'
      } else {
        router.push('/');
      }
      

    },
    enterAsAdmin: function () {
      localStorage.setItem("userType", "admin");
      localStorage.setItem("isAuth", "true");
      router.push('/');
    },
    enterAsUser: function () {
      localStorage.setItem("userType", "user")
      localStorage.setItem("isAuth", "true");
      router.push('/');
    }
  },

})
</script>
<style>
.loginBlock {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>