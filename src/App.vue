<template>
  
    
    <v-app>
      <v-content>
     
 <v-app-bar app dark color="blue">
      <v-toolbar-title>Vue Login</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text rounded  to="/about">Home</v-btn>
      <v-btn text rounded>Login</v-btn>
      <v-btn text rounded>About</v-btn>
      <v-btn text rounded>Contact us</v-btn>
    </v-app-bar>

    <router-view></router-view>
    </v-content>
    </v-app>
  
</template>

<script>
export default {
  components:{
    
    
  }
}
</script>
