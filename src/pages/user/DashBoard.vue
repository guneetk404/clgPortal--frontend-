<template>
  <div class="nav-margin">
    <!-- <div class="guneet"> -->
    <v-row guneet>
      <!-- First Card -->
      <v-col class="item-1">
        <v-card class="mx-auto" height="240px">
          <v-row no-gutters>
            <v-col class="profileImg">
              <v-img
                src="https://lh3.googleusercontent.com/a/ACg8ocIhQiMyP46BT7wKJW3qUc9IXeWQtFYPTBiEBcpACya7wA=s288-c-no"
                max-width="150"
                max-height="150"
              ></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-text>
                <h3 class="mb-2">Welcome</h3>
                <div>{{ first_name }} {{ last_name }}</div>
                <p class="text--primary">{{ email }}</p>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-text>
            <div class="margin-bottom">
              <v-icon>mdi-school</v-icon>
              <span class="spanitem">{{ college }}</span>
            </div>
            <v-icon>mdi-town-hall</v-icon>
            <span class="spanitem">{{ branch }}</span>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Second Card -->
      <v-col class="item-1">
        <v-card class="mx-auto" height="240px">
          <v-row class="headcolor">
            <v-col cols="8">
              <v-card-text>
                <v-icon color="white">mdi-fire</v-icon>
                <span style="color: rgb(255, 255, 255); font-size: 16px">
                  Hot Links
                </span>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-text>
            <p class="text--primary">No Active Links</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col class="item-1">
        <v-card class="mx-auto" height="240px">
          <v-row style="background: rgb(125, 128, 48)">
            <v-col cols="8">
              <v-card-text>
                <v-icon color="white">mdi-message</v-icon>
                <span style="color: rgb(255, 255, 255); font-size: 16px">
                  Latest Enquiry
                </span>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-text>
            <p class="text--primary">No Active Links</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- </div> -->
    <v-row >
      <v-col cols="8" class="item-1">
        <v-card>
          <v-card-title class="headline">
            <v-icon size="extra-small">mdi-bell-ring</v-icon> Announcement
          </v-card-title>
          <div
            class="announcement"
            v-for="(announcement, index) in announcements"
            :key="index"
          >
            <v-card-text>
              <div class="announcement-content">
                <h3>
                  {{ announcement.title }}
                  <span class="announcement-date">
                    ({{ announcement.date }})
                  </span>
                </h3>
                <div class="content">
                  {{ announcement.description }}

                </div>
                <div class="content">

                 Category: {{ announcement.category }}
                </div>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-icon small>mdi-download</v-icon>
                  <a :href="announcement.attachment_url" target="">Download</a>
                </v-card-actions>
              </div>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <v-col cols="4" class="item-1">
        <v-card class="mx-auto" height="240px">
          <v-row style="background: rgb(145, 58, 20)">
            <v-col cols="8">
              <v-card-text>
                <v-icon color="white">mdi-file-document-outline</v-icon>
                <span style="color: rgb(255, 255, 255); font-size: 16px">
                  Latest Documents
                </span>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-text>
            <p class="text--primary">No Documents available</p>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto mt-4 item-1" height="340px" >
          <v-row c style="background: rgb(87, 8, 35)">
            <v-col cols="8">
              <v-card-text>
                <v-icon color="white">mdi-chart-bar</v-icon>
                <span style="color: rgb(255, 255, 255); font-size: 16px">
                  Progress Calculator
                </span>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-text>
            <p class="text--primary">Progress is not generated yet</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getAnnouncements } from "../../services/announcementApi.js";
import userApi from "../../services/userApi";
import enquiryApi from "../../services/enquiryApi";
export default {
  data() {
    return {
      announcements: [
        {
          title: "Special Chance Exam form DEP -title 1",
          date: "11 Oct 2023",
          description: "Description for announcement 1",
          attachment_url: "url_for_announcement_1.pdf",
          category: "",
        },
      ],
      first_name: "",
      last_name: "",
      email: "",
      college: "Punjab Technical University",
      branch: "Computer Science Engineering",
      inquiries: [
        {
          title: "",
          description: "",
          date: "",
          status: "",
        },
      ],
    };
  },
  created() {
    this.dashboardAnnouncements();
    this.profileInformation();
    this.getEnquiries();
  },
  methods: {
    async dashboardAnnouncements() {
      const res = await getAnnouncements();
      if (res.data.success) {
        this.announcements = res.data.data;
        
      } else {
        console.log("annnoucement not fetched");
      }
      // console.log(res.data.success);
    },
    async profileInformation() {
      const res = await userApi.getUserData();
      if (res.data.success) {
        this.first_name = res.data.user.first_name;
        this.last_name = res.data.user.last_name;
        this.email = res.data.user.email;
      } else {
        console.log("profile not fetched");
      }
    },
    async getEnquiries() {
      const res = await enquiryApi.getEnquiries();
      this.inquiries = res.data.data;
      console.log(this.inquiries);
      // console.log(res.data);
    },
  },
};
</script>

<style scoped>
.item-1 {
  flex-grow: 1;
  flex-basis: 300px;
}
.guneet {
  display: flex;
  flex-wrap: wrap;
}
.mx-auto {
  box-shadow: 2px -4px 14px rgba(0, 0, 0, 0.2);
}
.content {
  margin-top: 15px;
}
.announcement-content {
  background-color: rgb(242, 242, 240);
  box-shadow: 8px 8px 15px 0 rgba(0, 0, 0, 0.5);
}
.headline {
  background-color: rgb(27, 66, 36);
  border-radius: 4px;
  color: white;
}
.profileImg {
  padding: 10px !important;
}
.margin-bottom {
  margin-bottom: 8px;
}
.nav-margin {
  margin-top: 74px;
  margin-bottom: 1rem;
  margin-left: 2rem;
  margin-right: 2rem;
}
.headcolor {
  background-color: rgb(233, 30, 99);
}

.spanitem {
  margin-left: 10px;
  font-size: 16px;
}
</style>
