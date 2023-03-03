<script>
    import axios from 'axios'
    export default {
        name: 'home-view',
        data() {
            return {
                user: null
            }
        },
        async created() {
            const response = await axios.get('http://localhost:4002/api/users', {
                headers: {
                    Authorization: 'Bearer' + localStorage.getItem('token')
                }
            });
            this.user = response.data;
            console.log(response)
        }
    }

</script>

<template>
    <h3>Hello</h3>
</template>