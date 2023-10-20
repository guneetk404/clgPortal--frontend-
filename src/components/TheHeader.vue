<template>
  <!-- <v-app class="guneet"> -->
    <v-app-bar app color="#6b130d">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar class="ml-auto">
        <!-- <v-img
          src="user-picture-url.jpg"
          max-width="40"
          max-height="40"
        ></v-img> -->
        <v-icon>mdi-account</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer">
      <v-list>
        <v-list-item link to="/home">
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-title>Home</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item link to="/home">
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-title>Announcements</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item link to="/home">
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-title>Student Document</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item link to="/profile">
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-title>Student Profile</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item link to="/home">
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-title>Bank Transactions</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
        <v-list-item link to="/home">
          <v-row>
            <v-col cols="auto">
              <v-list-item-icon>
                <v-icon>mdi-arrow-right</v-icon>
              </v-list-item-icon>
            </v-col>
            <v-col>
              <v-list-item-title>Student Enquiry</v-list-item-title>
            </v-col>
          </v-row>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Main content goes here -->
    <router-view></router-view>
  <!-- </v-app> -->
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style>

</style>
