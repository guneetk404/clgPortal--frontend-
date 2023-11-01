<template>
  <div class="profileContainer">
    <h2 class="a-heading">Profile</h2>
    <hr />
    <v-container class="mt-8">
      <v-row>
        <v-col cols="12" class="text-center">
          <div class="profile-image">
            <v-avatar size="160" class="mx-auto">
              <img
              src="https://lh3.googleusercontent.com/a/ACg8ocIhQiMyP46BT7wKJW3qUc9IXeWQtFYPTBiEBcpACya7wA=s288-c-no"
              alt="Profile Photo"
              class="my-auto"
              />
            </v-avatar>
          </div>
        </v-col>

        <v-col cols="12">
          <!-- Student Information Content -->
          <v-card>
            <!-- Student Information Content Goes Here -->
            <v-card-text>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    variant="outlined"
                    label="First Name"
                    v-model="student.firstName"
                    :readonly="!editMode"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    variant="outlined"
                    label="Last Name"
                    v-model="student.lastName"
                    :readonly="!editMode"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                variant="outlined"
                label="Email"
                v-model="student.email"
                :readonly="!editMode"
                class="custom-text-field"
              ></v-text-field>
              <v-text-field
                variant="outlined"
                label="Phone Number"
                v-model="student.phoneNumber"
                :readonly="!editMode"
                class="custom-text-field"
              ></v-text-field>
              <v-text-field
                variant="outlined"
                label="Father's Name"
                v-model="student.fathersName"
                :readonly="!editMode"
                class="custom-text-field"
              ></v-text-field>
              <v-text-field
                variant="outlined"
                label="Mother's Name"
                v-model="student.mothersName"
                :readonly="!editMode"
                class="custom-text-field"
              ></v-text-field>

              <!-- Address Fields -->
              <v-text-field
                variant="outlined"
                label="Address Line 1"
                v-model="student.addressLine1"
                :readonly="!editMode"
                class="custom-text-field"
              ></v-text-field>
              <v-row>
                <v-col cols="6">
                  <v-text-field
                    variant="outlined"
                    label="Pincode"
                    v-model="student.pincode"
                    :readonly="!editMode"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field
                    variant="outlined"
                    label="City"
                    v-model="student.city"
                    :readonly="!editMode"
                    class="custom-text-field"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-text-field
                variant="outlined"
                label="State"
                v-model="student.state"
                :readonly="!editMode"
                class="custom-text-field"
              ></v-text-field>
              <!-- Edit Button -->
              <v-card-actions>
                <v-btn @click="toggleEditMode">
                  {{ editMode ? "Cancel" : "Edit" }}
                </v-btn>
                <v-btn v-if="editMode" @click="saveChanges">Save</v-btn>
              </v-card-actions>
              <!-- Add more fields as needed -->
            </v-card-text>
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
      student: {
        firstName: "Guneet",
        lastName: "Singh",
        email: "Guneets@argusoft.com",
        phoneNumber: "6393970007",
        fathersName: "Rajendra Singh",
        mothersName: "Harpreet Kaur",
        addressLine1: "A-66 Argusoft",
        pincode: "382016",
        city: "Gandhinagar",
        state: "Gujarat",
        // Add more student information fields here
      },
      editMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
  },
};
</script>
<style scoped>
.a-heading {
  margin: 10px;
}
.profileContainer {
  margin-top: 80px;
}
.img{
    display: flex;
    justify-content: center;  /* Horizontal centering */
    align-items: center;      /* Vertical centering */
  
}
.profile-image {
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
}
</style>
