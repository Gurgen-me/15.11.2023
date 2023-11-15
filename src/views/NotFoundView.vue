<template>
    <div class="notFoundBlock">
        <h1>404

            PAGE NOT FOUND</h1>
        <p>But if you don't change your direction, and if you keep looking, you may end up where you are heading.</p>
        <router-link to="/">GET OUT ME FROM HERE!!!</router-link>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>
<style>
.notFoundBlock {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>