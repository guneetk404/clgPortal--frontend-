<template>
  <div class="container">
    <div class="box">
      <div class="profile">
        <img src="profile-image-url.jpg" alt="Profile Picture" />
      </div>
      <div class="info">
        <h3>Name</h3>
        <p>Email</p>
      </div>
    </div>
    <div class="box"></div>
    <div class="box"></div>
  </div>
  <v-menu :close-on-content-click="false" location="end">
    <template v-slot:activator="{ props }">
      <v-btn color="#802f59" v-bind="props">
        <v-icon icon="mdi-account" />
      </v-btn>
    </template>

    <v-card min-width="300">
      <v-list>
        <v-list-item title="userName" subtitle="userEmail"> </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn variant="text" @click="menu = false"> Cancel </v-btn>
        <v-btn color="primary" variant="text" @click="onLogout">logout </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
}

.box {
  flex: 1;
  height: 200px;
  background-color: #e0e0e0;
  margin: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
}

.profile {
  flex: 1;
  text-align: left;
}

.profile img {
  max-width: 100px; /* Adjust the image size as needed */
  height: auto;
}

.info {
  flex: 3;
  text-align: left;
  padding-left: 10px;
}

h3 {
  margin: 0;
}

p {
  margin: 0;
}
</style>
