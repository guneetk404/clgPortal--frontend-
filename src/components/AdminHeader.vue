<template>
  <!-- <v-app class="guneet"> -->
  <v-app-bar app color="#6b130d">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-menu :close-on-content-click="false" location="end">
      <template v-slot:activator="{ props }">
        <v-btn color="#802f59" v-bind="props">
          <v-icon color="white" icon="mdi-account" />
        </v-btn>
      </template>

      <v-card min-width="300">
        <v-list>
          <v-list-item :title="userName" :subtitle="userEmail"> </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn variant="text" @click="menu = false"> Cancel </v-btn>
          <v-btn color="primary" variant="text" @click="onLogout"
            >logout
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </v-app-bar>

  <v-navigation-drawer app temporary v-model="drawer">
    <v-list>
      <v-list-item link to="/admin">
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
      <v-list-item link to="/admin-announcement">
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
      <v-list-item link to="/admin">
        <v-row>
          <v-col cols="auto">
            <v-list-item-icon>
              <v-icon>mdi-arrow-right</v-icon>
              <!-- <v-icon>mdi-file-document-outline</v-icon> -->
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title>Student Document</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item link to="/admin">
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
      <v-list-item link to="/admin-feedback">
        <v-row>
          <v-col cols="auto">
            <v-list-item-icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title>Feedback</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item link to="/admin-enquiry">
        <v-row>
          <v-col cols="auto">
            <v-list-item-icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title> Enquiry</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item link to="/admin-all-users">
        <v-row>
          <v-col cols="auto">
            <v-list-item-icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title> All Users</v-list-item-title>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item link to="/admin-register">
        <v-row>
          <v-col cols="auto">
            <v-list-item-icon>
              <v-icon>mdi-arrow-right</v-icon>
            </v-list-item-icon>
          </v-col>
          <v-col>
            <v-list-item-title> New Registerations</v-list-item-title>
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
      userEmail: "Guneetk404@gmail.com",
      drawer: false,
      userMenuVisible: false,
      userName: "Guneet Singh",
    };
  },
  methods: {
    toggleUserMenu() {
      this.userMenuVisible = !this.userMenuVisible;
    },
    logout() {
      // Implement your logout logic here, e.g., clearing user session or tokens.
      // After logging out, you can redirect the user to the login page.
      // You may also need to clear user data like userName from data.
    },
  },
};
</script>

<style></style>
