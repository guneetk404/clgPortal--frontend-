<template>
  <div class="studentContainer">
    <v-card>
      <v-card-title class="ml-2"> Student Profile </v-card-title>
      <v-card-text>
        <v-form class="profile">
          <!-- Profile Picture -->
          <v-row align="center">
            <v-col class="imageCenter">
              <v-avatar size="150">
                <img
                  src="https://lh3.googleusercontent.com/a/ACg8ocIhQiMyP46BT7wKJW3qUc9IXeWQtFYPTBiEBcpACya7wA=s288-c-no"
                  alt="Student Profile"
                />
              </v-avatar>
            </v-col>
          </v-row>

          <!-- Student Name -->
          <v-text-field
            label="Name"
            v-model="student.name"
            :readonly="!editMode"
          ></v-text-field>

          <!-- Student ID -->
          <v-text-field
            label="Student ID"
            v-model="student.studentId"
            :readonly="!editMode"
          ></v-text-field>

          <!-- Email -->
          <v-text-field
            label="Email"
            v-model="student.email"
            :readonly="!editMode"
          ></v-text-field>

          <!-- College Name -->
          <v-text-field
            label="College"
            v-model="student.college"
            :readonly="!editMode"
          ></v-text-field>

          <!-- Major -->
          <v-text-field
            label="Major"
            v-model="student.major"
            :readonly="!editMode"
          ></v-text-field>

          <!-- Father's Name -->
          <v-text-field
            label="Father's Name"
            v-model="student.fathersName"
            :readonly="!editMode"
          ></v-text-field>

          <!-- Mother's Name -->
          <v-text-field
            label="Mother's Name"
            v-model="student.mothersName"
            :readonly="!editMode"
          ></v-text-field>

          <!-- Edit and Save/Cancel Buttons -->
          <v-row align="center">
            <v-col>
              <v-btn @click="toggleEditMode" v-if="!editMode"> Edit </v-btn>
              <v-col v-if="editMode">
                <v-btn @click="cancelEdit">Save</v-btn>

                <v-btn @click="cancelEdit">Cancel</v-btn>
              </v-col>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: "John Doe",
        studentId: "123456",
        email: "johndoe@example.com",
        college: "Example College",
        major: "Computer Science",
        fathersName: "John Doe Sr.",
        mothersName: "Jane Doe",
        profilePicture: "/path-to-profile-picture.jpg",
      },
      originalStudent: {}, // To store the original student data
      editMode: false,
    };
  },
  methods: {
    toggleEditMode() {
      if (this.editMode) {
        // If cancel is clicked, restore the original data
        this.student = { ...this.originalStudent };
      } else {
        // If edit is clicked, store the original data and enter edit mode
        this.originalStudent = { ...this.student };
      }
      this.editMode = !this.editMode;
    },
    saveChanges() {
      // Perform save action here (e.g., make an API request to save changes)
      this.editMode = false;
    },
    cancelEdit() {
      // Restore the original data and exit edit mode
      this.student = { ...this.originalStudent };
      this.editMode = false;
    },
  },
};
</script>

<style scoped>
.studentContainer {
  margin-top: 80px;
}
img {
  scale: 0.75 !important;
}
.profile {
  width: 75%;
  margin: 0 auto;
}
.imageCenter {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
</style>
