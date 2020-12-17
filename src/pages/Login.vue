<template>   

      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Login</v-card-title>
        <v-card-text>
          <v-text-field v-model="user.username" label="Username" prepend-icon="mdi-account-circle"/>
          <v-text-field v-model="user.password" 
          label="Password" 
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"/>
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-btn color="info" @click="login" >Login</v-btn>
        </v-card-actions>
      </v-card>
 

   
</template>
<script>
import axios from 'axios';
export default {
  components: {
  },
    mounted() {
    },
    data() {
        return {
          showPassword:false,
            user: {
                username: "",
                password: "",

            },
        };
    },
    created() {
    },
    methods: {
       login(){
         axios.post('/login', {
        username: this.user.username,
        password: this.user.password
});
       }
    }
};
</script>

