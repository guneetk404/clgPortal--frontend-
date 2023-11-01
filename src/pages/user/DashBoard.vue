<template>
  <div class="nav-margin">
    <!-- <div class="guneet"> -->
    <v-row guneet>
      <!-- First Card -->
      <v-col  class="item-1">
        <v-card class="mx-auto" height="240px">
          <v-row no-gutters>
            <v-col  class="profileImg">
              <v-img
                src="https://lh3.googleusercontent.com/a/ACg8ocIhQiMyP46BT7wKJW3qUc9IXeWQtFYPTBiEBcpACya7wA=s288-c-no"
                max-width="150"
                max-height="150"
              ></v-img>
            </v-col>
            <v-col cols="8">
              <v-card-text>
                <h3 class="mb-2">Welcome</h3>
                <div>Guneet Singh</div>
                <p class="text--primary">guneetk404@gmail.com</p>
              </v-card-text>
            </v-col>
          </v-row>
          <v-card-text>
            <div class="margin-bottom">
              <v-icon>mdi-school</v-icon>
              <span class="spanitem">Punjab Technical University</span>
            </div>
            <v-icon>mdi-town-hall</v-icon>
            <span class="spanitem">Computer Science Engineering </span>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Second Card -->
      <v-col  class="item-1">
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
      <v-col  class="item-1">
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
    <v-row>
      <v-col cols="8">
        <v-card style="max-height: 596px; overflow-y: auto">
          <!-- Card Title -->

          <v-card-title class="headline">
            <v-icon size="extra-small">mdi-bell-ring</v-icon> Announcement
          </v-card-title>
          <div class="announcement" v-for="i in announcement" :key="i">
            <!-- Scrollable Card Content -->
            <v-card-text>
              <div class="announcement-content">
                <h3>
                  Special Chance Exam form DEP

                  <span class="announcement-date"> (11 Oct 2023) </span>
                </h3>

                <div class="content">
                  This is the notification for the students to take special
                  exams This is the notification for the students to take
                  special exams This is the notification for the students to
                  take special exams This is the notification for the students
                  to take special exams
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
      </v-col>
      <v-col cols="4">
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
        <v-card class="mx-auto mt-4" height="340px">
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
export default {
  data() {
    return {
      announcement: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>

<style scoped>
.item-1{
  flex-grow:1;
  flex-basis:300px;
}
.guneet{
  display:flex;
  flex-wrap:wrap;
}
.mx-auto {
  box-shadow: 2px -4px 14px rgba(0, 0, 0, 0.2)
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
