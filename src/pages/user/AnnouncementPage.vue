<template>
  <div class="announceContainer">
    <h2 class="a-heading">Announcements</h2>
    <hr />
    <v-card style="overflow-y: auto; margin: 25px">
      <!-- Card Title -->

      <div class="announcement" v-for="i in announcement" :key="i">
        <!-- Scrollable Card Content -->
        <v-card-text>
          <div class="announcement-content">
            <h3>
              Special Chance Exam form DEP

              <span class="announcement-date"> (11 Oct 2023) </span>
            </h3>

            <div class="content">
              This is the notification for the students to take special exams
              This is the notification for the students to take special exams
              This is the notification for the students to take special exams
              This is the notification for the students to take special exams
            </div>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-icon small>mdi-download</v-icon>
              <!-- <span class="announcement-date"> Download </span> -->
            </v-card-actions>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      announcement: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style scoped>
.a-heading{
  margin:10px;
}
.content {
  margin-top: 15px;
}
.announceContainer {
  margin-top: 80px;
}

.announcement-content {
  background-color: rgb(242, 242, 240);
  box-shadow: 8px 8px 15px 0 rgba(0, 0, 0, 0.5);
  font-size: 15px;
}
.announcement-date {
  text-align: right;
}
</style>
