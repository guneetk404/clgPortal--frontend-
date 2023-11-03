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
      <div class="mt-4">
        <h3 class="ma-4">Upload Student Data in CSV format to Register Students in Bulk</h3>
        <input type="file" accept=".csv" @change="handleFileUpload" />
        <div></div>
        <v-btn class="ma-4" color="primary" @click="registerStudents">Register Students</v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";

import userApi from "../../services/userApi";
import Papa from "papaparse";

export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
      },
      students: [],
    };
  },
  methods: {
    async submitForm() {
      try {
        const res = await userApi.createUser(this.formData);
        if (res.data.success) {
          toast.success("Student Registered Successfully");
        } 
      } catch (error) {
        toast.error("Sorry Please check the details of Student");
      }
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: (results) => {
          this.students = results.data.filter((item) => item.email); //
          console.log(this.students);
        },
        error: (error) => {
          console.error("CSV parsing error:", error.message);
        },
      });
    },
    async registerStudents() {
      const res = await userApi.bulkRegisterHelper(this.students);
      console.log(res);
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
