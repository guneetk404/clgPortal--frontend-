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
              <v-row>
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
              </v-row>

              <!-- 5-Star Rating -->
              <div class="rating-section">
                <div class="rating-label">Rate Your Experience:</div>
                <v-rating
                  v-model="formData.rating"
                  background-color="transparent"
                ></v-rating>
              </div>

              <!-- Feedback Options -->
              <div class="feedback-options">
                <div
                  class="feedback-option"
                  v-for="(option, index) in radioOptions"
                  :key="index"
                >
                  <div class="option">
                    <span>{{ option.label }}</span>
                  </div>
                  <v-radio-group v-model="option.selectedValue" row inline>
                    <v-radio
                      v-for="(radio, radioIndex) in option.values"
                      :key="radioIndex"
                      :label="radio.label"
                      :value="radio.value"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </div>
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
export default {
  data() {
    return {
      formData: {
        name: "Guneet Singh",
        email: "Guneetk404@gmail.com",
        rating: 0, // Initial rating is set to 0 stars
        courseObjectives: "Neutral",
        materialMatchesSyllabus: "Neutral",
        // Add more feedback options and their initial values here
      },
      radioOptions: [
        {
          name: "materialMatchesSyllabus",
          label: "Material Presented in Class Matches Syllabus:",
          selectedValue: "Neutral",
          values: [
            { label: "Disagree", value: "Disagree" },
            { label: "Neutral", value: "Neutral" },
            { label: "Agree", value: "Agree" },
          ],
        },
        {
          name: "receivedSyllabus",
          label: "I Received Syllabus & Course Description:",
          selectedValue: "Neutral",
          values: [
            { label: "Disagree", value: "Disagree" },
            { label: "Neutral", value: "Neutral" },
            { label: "Agree", value: "Agree" },
          ],
        },
        {
          name: "courseObjectivesClear",
          label: "Course Objectives Stated Clearly:",
          selectedValue: "Neutral",
          values: [
            { label: "Disagree", value: "Disagree" },
            { label: "Neutral", value: "Neutral" },
            { label: "Agree", value: "Agree" },
          ],
        },
        {
          name: "instructorKnowledge",
          label: "Instructor Shows Adequate Knowledge of Course:",
          selectedValue: "Neutral",
          values: [
            { label: "Disagree", value: "Disagree" },
            { label: "Neutral", value: "Neutral" },
            { label: "Agree", value: "Agree" },
          ],
        },
        {
          name: "efficientClassTime",
          label: "Class Time Is Used Efficiently:",
          selectedValue: "Neutral",
          values: [
            { label: "Disagree", value: "Disagree" },
            { label: "Neutral", value: "Neutral" },
            { label: "Agree", value: "Agree" },
          ],
        },
        {
          name: "instructorPrepared",
          label: "The Instructor Is Well Prepared:",
          selectedValue: "Neutral",
          values: [
            { label: "Disagree", value: "Disagree" },
            { label: "Neutral", value: "Neutral" },
            { label: "Agree", value: "Agree" },
          ],
        },
        {
          name: "informativeClass",
          label: "This Class Was Very Informative:",
          selectedValue: "Neutral",
          values: [
            { label: "Disagree", value: "Disagree" },
            { label: "Neutral", value: "Neutral" },
            { label: "Agree", value: "Agree" },
          ],
        },

        // You can add more radio options here
      ],
    };
  },
  methods: {
    submitFeedback() {
      // Implement your submission logic here
      console.log("Feedback submitted:", this.formData);
      // You can send the feedback data to a server or perform other actions
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

.rating-section {
  margin-top: 20px;
}

.rating-label {
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
