<script>
    export default {
        name: 'navbar-view',
        props: {
            user: Object
        },
        methods: {
            handleClick() {
                localStorage.removeItem('token')
                localStorage.removeItem('userId')
                this.$router.push('/')
            }
        }
    }
</script>

<template>

    <nav>
        <div>
            <ul v-if="!user">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link to="/login">Login</router-link>
                </li>
                <li>
                    <router-link to="/register">Sign Up</router-link>
                </li>
            </ul>
            <ul v-if="user">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <a href="javascript:void(0)" @click="handleClick">Logout</a>
                </li>
            </ul>
        </div>
    </nav>

</template>

