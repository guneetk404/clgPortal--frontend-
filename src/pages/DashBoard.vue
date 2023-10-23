<template>
  <div class="nav-margin">
    <v-row>
      <!-- First Card -->
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400" height="240px">
          <v-row no-gutters>
            <v-col cols="4" class="profileImg">
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
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400" height="240px">
          <v-row class="headcolor">
            <v-col cols="8">
              <v-card-text>
                <v-icon>mdi-fire</v-icon>
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
      <v-col cols="4">
        <v-card class="mx-auto" max-width="400" height="240px">
          <v-row class="headcolor1">
            <v-col cols="8">
              <v-card-text>
                <v-icon>mdi-message</v-icon>
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

    <v-card style="max-height: 390px; overflow-y: auto; margin: 25px">
      <!-- Card Title -->
      <v-card-title class="headline"> Announcement </v-card-title>

      <div class="announcement" v-for="i in announcement" :key="i">
        <!-- Scrollable Card Content -->
        <v-card-text>
          <div class="announcement-content">Special Chance Exam form DEP

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-icon small>mdi-calendar</v-icon>
              <span class="announcement-date"> (11 Oct 2023) </span>
            </v-card-actions>
          </div>
          </v-card-text>

        <!-- Announcement Date -->
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

.announcement-content {
  background-color: rgb(242, 242, 240);
  box-shadow: 8px 8px 15px 0 rgba(0, 0, 0, 0.5);

}
.headline {
  background-color: rgb(27, 66, 36);
  border-radius: 4px;
  color:white;
}
.profileImg {
  padding: 10px !important;
}
.margin-bottom {
  margin-bottom: 16px;
}
.nav-margin {
  margin-top: 74px;
}
.headcolor {
  background-color: rgb(233, 30, 99);
}
.headcolor1 {
  background-color: rgb(125, 128, 48);
}

.spanitem {
  margin-left: 10px;
  font-size: 16px;
}
</style>
