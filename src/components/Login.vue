<script>
    import axios from 'axios'
    export default {
        name: 'login-view',
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post('http://localhost:4002/api/login', {
                    email: this.email,
                    password: this.password
                });

                localStorage.setItem('token', response.data.token)
            }
        }
    }

</script>

<template>

<form @submit.prevent="handleSubmit">

    <h3>Login</h3>

    <div>
        <label>Email</label>
        <input type="email" v-model="email" placeholder="Email" />
    </div>

    <div>
        <label>Password</label>
        <input type="password" v-model="password" placeholder="Password">
    </div>

    <button>Login</button>

</form>

</template>

