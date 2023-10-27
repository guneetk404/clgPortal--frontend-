<template>
  <div class="enquiryContainer">
    <h2 class="a-heading">Student Enquiry</h2>
    <hr />

    <v-card color="transparent">
      <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
        <v-tab :value="1">Student Enquiry Form</v-tab>
        <v-tab :value="2">Student Enquiry List</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item :value="1" v-if="tab == 1">
          <!-- Student Inquiry Form Content -->
          <v-card-text>
            <v-form @submit.prevent="submitForm" class="custom-form">
              <!-- Query Related To -->
              <v-text-field
                variant="outlined"
                label="Query Related To"
                required
                v-model="inquiry.queryRelatedTo"
              ></v-text-field>
              <!-- Description -->
              <v-textarea
                variant="outlined"
                label="Description"
                required
                v-model="inquiry.description"
              ></v-textarea>
              <!-- Phone -->
              <v-text-field
                variant="outlined"
                label="Phone"
                required
                type="tel"
                v-model="inquiry.phone"
              ></v-text-field>
              <!-- <v-row align="center">
                <v-icon color="primary">mdi-phone</v-icon>
                <v-text-field
               
                  label="Phone"
                  v-model="inquiry.phone"
                  required
                  type="tel"
                ></v-text-field>
              </v-row> -->
              <!-- Email ID -->

              <v-text-field
                variant="outlined"
                label="Email ID"
                required
                type="email"
                v-model="inquiry.emailId"
              ></v-text-field>
              <v-btn type="submit" color="deep-purple-accent-4">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-tab-item>

        <v-tab-item :value="2" v-if="tab == 2">
          <!-- Student Inquiry List Content -->
          <v-card-text>
            <v-card>
              <v-card-item
                v-for="inquiry in inquiries"
                :key="inquiry.id"
                class="inquiry-list-item"
              >
                <v-card-title class="inquiry-title"
                  >Query Related To: {{ inquiry.queryRelatedTo }}</v-card-title
                >
                <v-card-subtitle class="inquiry-subtitle"
                  >Description: {{ inquiry.description }}</v-card-subtitle
                >

                <v-card-subtitle class="inquiry-subtitle">
                  Phone: {{ inquiry.phone }}</v-card-subtitle
                >
                <v-card-subtitle class="inquiry-subtitle"
                  >Email: {{ inquiry.emailId }}</v-card-subtitle
                >
              </v-card-item>
            </v-card>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 1, // Initially select the first tab (the form)
      inquiries: [], // Initialize with your student inquiries data
      inquiry: {
        queryRelatedTo: "This Query is related to fee structure",
        description:
          "I want the  details regarding btech cse course fees",
        phone: "6393970007",
        emailId: "guneetk404@gmail.com",
        id: 1, // You can use a unique ID for each inquiry
      },
    };
  },
  methods: {
    submitForm() {
      // Assign a unique ID to the new inquiry
      this.inquiry.id = this.inquiries.length + 1;
      this.inquiries.push({ ...this.inquiry });
      this.inquiry = {
        queryRelatedTo: "",
        description: "",
        phone: "",
        emailId: "",
        id: 1, // Reset ID for the next inquiry
      };
    },
  },
};
</script>

<style>
.a-heading {
  margin: 10px;
}
.enquiryContainer {
  margin-top: 80px;

}
.custom-form {
  width: 90%;
  margin: 0 auto;
  padding: 16px; /* Add padding to the form */
  border-radius: 8px; /* Add rounded corners */
  text-align: center;
}
.inquiry-list-item {
  background-color: #f7f7f7;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.inquiry-title {
  font-weight: bold;
}

.inquiry-subtitle {
  width: 100%; /* Make text span the entire width */
}
</style>
