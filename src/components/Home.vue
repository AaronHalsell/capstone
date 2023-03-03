<script>
    export default {
        name: 'home-view',
        props: {
            user: Object
        }
    }

</script>

<template>
    <h3 v-if="user">Hi {{ user.firstname }} {{ user.lastname }}</h3>
    <h3 v-if="!user">You are not logged in!</h3>
</template>



