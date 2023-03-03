<script>
import Navbar from './components/Navbar.vue'
import { RouterView } from 'vue-router' 
import axios from 'axios'

export default {
  name: 'app-view',
  components: {
    Navbar,
    RouterView
  },
  data() {
            return {
                userId: localStorage.getItem('userId'),
                user: null
            }
        },
        async created() {
            axios.get(`http://localhost:4002/api/users/${this.userId}`, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }).then(response => (this.user = response.data))
        }
  }

</script>

<template>
  <div id="app">
    <Navbar :user='user'></Navbar>
    <div>
      <RouterView :user='user' />
    </div>

  </div>
</template>



