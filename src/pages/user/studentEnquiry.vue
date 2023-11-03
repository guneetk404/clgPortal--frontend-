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
          <v-card-text>
            <v-form @submit.prevent="submitForm" class="custom-form">
              <v-text-field
                variant="outlined"
                label="Query Related To"
                required
                v-model="inquiry.title"
              ></v-text-field>
              <v-textarea
                variant="outlined"
                label="Description"
                required
                v-model="inquiry.description"
              ></v-textarea>
              <v-text-field
                disabled
                variant="outlined"
                label="Phone"
                required
                type="tel"
                v-model="phone"
              ></v-text-field>
              <v-text-field
                disabled
                variant="outlined"
                label="Email ID"
                required
                type="email"
                v-model="email"
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
                  >Query Related To: {{ inquiry.title }}</v-card-title
                >
                <v-card-subtitle class="inquiry-subtitle"
                  >Description: {{ inquiry.description }}</v-card-subtitle
                >

                <v-card-subtitle class="inquiry-subtitle">
                  Phone: {{ phone }}</v-card-subtitle
                >
                <v-card-subtitle class="inquiry-subtitle"
                  >Email: {{ email }}</v-card-subtitle
                >
                <!-- <v-card-subtitle class="inquiry-subtitle"
                >Description: {{ inquiry.comments.comment_id.comment }}</v-card-subtitle
              > -->
                <div class="float-right mr-4">
                  Status : {{ inquiry.status }}
                </div>
              </v-card-item>
            </v-card>
          </v-card-text>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import enquiryApi from "../../services/enquiryApi.js";
import userApi from "../../services/userApi";
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      tab: 1, // Initially select the first tab (the form)
      inquiries: [], // Initialize with your student inquiries data
      inquiry: {
        title: "This Query is related to fee structure",
        description: "I want the  details regarding btech cse course fees",
        status: "",
      },
      phone: null,
      email: "",
    };
  },
  created() {
    this.getEnquiries();
    this.profileInformation();
  },
  methods: {
    async submitForm() {
      try {
        const res = await enquiryApi.postEnquiry(this.inquiry);
        if (res.data.success) {
          this.inquiries.push({ ...this.inquiry, status: "pending" });
          toast.success("Enquiry Posted Successfully");
        }
      } catch (error) {
        toast.error("Error Posting Enquiry");
      }
    },
    async getEnquiries() {
      try {
        const res = await enquiryApi.getEnquiries();
        if (res.data.success) {
          this.inquiries = res.data.data;
          console.log(this.inquiries);
          // console.log(this.inquiries[5].comments[0].comment_id.comment);
        }
      } catch (error) {
        toast.error("Error Fetching the Enquiries!");
      }
    },
    async profileInformation() {
      const res = await userApi.getUserData();
      if (res.data.success) {
        this.phone = res.data.user.phone;
        this.email = res.data.user.email;
      }
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
  color:black !important;
  font-weight: bold !important;

}
</style>
