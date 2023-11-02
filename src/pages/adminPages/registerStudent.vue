<template>
  <div class="registerContainer">
    <v-container>
      <h2 class="text-center ma-4">New Student Registeration</h2>
      <v-form @submit.prevent="submitForm">
        <v-text-field
          v-model="formData.first_name"
          label="First Name"
          required
          variant="outlined"
        ></v-text-field>

        <v-text-field
          v-model="formData.last_name"
          label="Last Name"
          required
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="formData.email"
          label="Email"
          type="email"
          required
          variant="outlined"
        ></v-text-field>
        <v-text-field
          v-model="formData.phone"
          label="Phone"
          type="tel"
          required
          variant="outlined"
        ></v-text-field>
        <v-btn color="primary" type="submit">Submit</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import userApi from "../../services/userApi";
export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      },
    };
  },
  methods: {
    async submitForm() {
      const res = await userApi.createUser(this.formData);
      if (res.data.success) {
        console.log("new user created");
      } else {
        console.log("user cant be registered");
      }
      console.log(res);
      console.log("Form data:", this.formData);
    },
  },
};
</script>
<style scoped>
.registerContainer {
  margin-top: 75px;
}
.v-container {
  max-width: 60%;
}
</style>
