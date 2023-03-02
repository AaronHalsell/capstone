<script>
    import axios from 'axios'

    export default {
        name: 'register-view',
        data() {
            return {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                password_confirm: '',
                country: '',
                city: '',
                postalCode: '',
                district: '',
                telephone: '',
                address: '',
                address2: '',
            }
        },
        methods: {
            async handleSubmit() {
                const response = await axios.post('http://localhost:4002/api/signup', {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    password: this.password,
                    country: this.country,
                    city: this.city,
                    postalCode: this.postalCode,
                    district: this.district,
                    telephone: this.telephone,
                    address: this.address,
                    address2: this.address2
                });

                console.log(response);
                this.$router.push('/login')
            }
        }
    }
</script>

<template>
<h3>Sign Up</h3>
<form @submit.prevent="handleSubmit">
    <div>
        <label>First Name</label>
        <input type="text" v-model="firstName" placeholder="First Name"/>
    </div>

    <div>
        <label>Last Name</label>
        <input type="text" v-model="lastName" placeholder="Last Name"/>
    </div>

    <div>
        <label>Email</label>
        <input type="email" v-model="email" placeholder="Email"/>
    </div>

    <div>
        <label>Address</label>
        <input type="text" v-model="address" placeholder="Address"/>
    </div>

    <div>
        <label>Address</label>
        <input type="text" v-model="address2" placeholder="Email"/>
    </div>

    <div>
        <label>District</label>
        <input type="text" v-model="district" placeholder="District"/>
    </div>
    
    <div>
        <label>City</label>
        <input type="text" v-model="city" placeholder="City"/>
    </div>

    
    <div>
        <label>Postal Code</label>
        <input type="text" v-model="postalCode" placeholder="Postal Code"/>
    </div>

    
    <div>
        <label>Country</label>
        <input type="text" v-model="country" placeholder="Country"/>
    </div>

    
    <div>
        <label>Telephone</label>
        <input type="text" v-model="telephone" placeholder="Telephone"/>
    </div>

    <div>
        <label>Password</label>
        <input type="password" v-model="password" placeholder="Password"/>
    </div>

    <div>
        <label>Confirm Password</label>
        <input type="password" v-model="password_confirm" placeholder="Confirm Password"/>
    </div>

    <button>Sign Up</button>
</form>
</template>

