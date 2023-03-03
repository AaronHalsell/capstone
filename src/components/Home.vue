<script>
    import axios from 'axios'
    export default {
        name: 'home-view',
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
    <h3 v-if="user">Hi {{ user.firstname }} {{ user.lastname }}</h3>
    <h3 v-if="!user">Hello</h3>
</template>



