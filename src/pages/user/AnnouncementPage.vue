<template>
  <div class="announceContainer">
    <h2 class="a-heading">Announcements</h2>
    <hr />
    <!-- <v-card style="overflow-y: auto; margin: 25px">

      <div class="announcement" v-for="i in announcement" :key="i">
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
            </v-card-actions>
          </div>
        </v-card-text>
      </div>
    </v-card> -->
    <v-card style="overflow-y: auto; margin: 25px">
      <div
        class="announcement"
        v-for="(announcement, index) in announcements"
        :key="index"
      >
        <v-card-text>
          <div class="announcement-content">
            <h3>
              {{ announcement.title }}
              <span class="announcement-date"> ({{ announcement.date }}) </span>
            </h3>

            <div class="content">
              {{ announcement.description }}
            </div>
            <div class="content">
              Category:
              {{ announcement.category }}
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-icon small>mdi-download</v-icon>
              <a :href="announcement.attachment_url" target="_blank"
                >Download</a
              >
            </v-card-actions>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import { getAnnouncements } from "../../services/announcementApi.js";

export default {
  data() {
    return {
      announcements: [
        {
          title: "Special Chance Exam form DEP -title 1",
          date: "11 Oct 2023",
          description: "Description for announcement 1",
          attachment_url: "url_for_announcement_1.pdf",
        },
      ],
    };
  },
  created() {
    this.dashboardAnnouncements();
  },
  methods: {
    async dashboardAnnouncements() {
      const res = await getAnnouncements();
      if (res.data.success) {
        this.announcements = res.data.data;
      } else {
        console.log("annnoucement not fetched");
      }
    },
  },
};
</script>

<style scoped>
.a-heading {
  margin: 10px;
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
