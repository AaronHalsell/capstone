<script setup>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router' 

</script>

<template>
  <div id="app">
    <Navbar></Navbar>
    <div>
      <RouterView />
    </div>

  </div>
</template>



