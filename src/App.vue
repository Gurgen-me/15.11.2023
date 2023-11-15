<template>
  <v-app id="inspire">
    <template v-if="this.$route.name == 'Login' || this.$route.name == 'NotFound'">
      <router-view />
    </template>
    <template v-else>
      <v-navigation-drawer v-model="drawer">

        <nav>
          <router-link to="/profile">
            <div class="menu-item">Profile</div>
          </router-link>
          <router-link to="/">
            <div class="menu-item">Home</div>
          </router-link>
          <router-link to="/chat">
            <div class="menu-item">Chat</div>
          </router-link>

          <v-spacer></v-spacer>
          <router-link to="/login" @click="logout">
            <div class="menu-item">Exit</div>
          </router-link>
        </nav>
      </v-navigation-drawer>
      <v-app-bar>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-app-bar-title>{{ this.$route.name }}</v-app-bar-title>

        <v-btn icon @click="toggleTheme">
          <v-icon>{{ this.icon }}</v-icon>
        </v-btn>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </template>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from 'vuetify'
export default defineComponent({
  name: 'App',

  components: {
  },
  mounted() {
    this.checkAuth();
  },
  methods: {
    checkAuth: function () {
      if (localStorage.getItem("isAuth") != 'true') {
        this.$router.replace('/login')
      }
    },
    logout: function () {
      this.$store.commit('logout')

    },
    toggleTheme() {

      this.theme.global.name.value = this.theme.global.current.value.dark ? 'myCustomLightTheme' : 'myCustomDarkTheme'
      this.icon = this.theme.global.current.value.dark ? 'md-pencil' : 'mdi-cancel'
    },
      mounted() {
    this.theme = useTheme()
  },
  },

  data() {
    return {
      drawer: true
    }
  },

})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  display: flex;
  flex-direction: column;
  height: 100%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.menu-item {
  margin: 10px;
}
</style>