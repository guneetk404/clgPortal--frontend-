<template>
  <div class="feedbackContainer">
    <h2 class="a-heading">Feedback Form</h2>
    <hr />
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <!-- Feedback Form Card -->
          <v-card class="feedback-card">
            <!-- <v-card-title class="headline">Feedback Form</v-card-title> -->

            <v-card-text>
              <!-- Name and Email Fields -->
              <!-- <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    label="Name"
                    v-model="formData.name"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field
                    variant="outlined"
                    label="Email"
                    v-model="formData.email"
                  ></v-text-field>
                </v-col>
              </v-row> -->

              <!-- 5-Star overall_rating -->
              <div class="overall_rating-section">
                <div class="overall_rating-label">Rate Your Experience:</div>
                <v-rating
                  v-model="formData.overall_rating"
                  background-color="transparent"
                ></v-rating>
              </div>

              <!-- Feedback Options -->
              <div class="feedback-options">
                <div
                  class="feedback-option"
                  v-for="(parameter, index) in feedbackParameters"
                  :key="index"
                >
                  <div class="option">
                    <span>{{ parameter.parameter }}</span>
                  </div>
                  <v-radio-group v-model="parameter.selectedValue" row inline>
                    <v-radio
                      v-for="(radio, radioIndex) in parameter.options"
                      :key="radioIndex"
                      :label="radio.label"
                      :value="radio.value"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </div>

              <v-textarea
                variant="outlined"
                v-model="formData.suggestion"
                label="Suggestions"
              ></v-textarea>
            </v-card-text>

            <!-- Submit Button -->
            <v-card-actions>
              <v-btn @click="submitFeedback" color="primary">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import feedbackApi from "../../services/feedbackApi";
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      options: [],
      formData: {
        overall_rating: 0, // Initial overall_rating is set to 0 stars
        suggestion: "",

        // Add more feedback options and their initial values here
      },
      feedbackParameters: [],
    };
  },
  created() {
    this.getFeedbackParameter();
  },
  computed: {
    feedback() {
      return this.feedbackParameters.map((parameter) => ({
        feedback_parameter_id: parameter._id,
        feedback_parameter_value: parameter.selectedValue,
      }));
    },
  },
  methods: {
    async submitFeedback() {
      try {
        const data = { ...this.formData, feedback: this.feedback };
        const res = await feedbackApi.postFeedback(data);
        if (res.data.success) {
          toast.success("feedback Submitted Successfully");
        }
      } catch (error) {
        toast.error("Error Submitting Feedback");
      }
    },
    async getFeedbackParameter() {
      const res = await feedbackApi.getFeedbackParams();
      this.feedbackParameters = res.data.data;
      this.feedbackParameters = this.feedbackParameters.map((parameter) => ({
        ...parameter,
        selectedValue: null,
      }));
      // console.log(res.data);
    },
  },
};
</script>

<style scoped>
.a-heading {
  margin: 10px;
}
.v-selection-control-group {
  display: flex !important;
  flex-direction: inherit !important;
}
.option {
  width: 40%;
}
.feedbackContainer {
  margin-top: 80px;
}
.feedback-card {
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 8px;
}

.overall_rating-section {
  margin-top: 20px;
}

.overall_rating-label {
  font-weight: bold;
}

.feedback-options {
  margin-top: 20px;
}

.feedback-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
