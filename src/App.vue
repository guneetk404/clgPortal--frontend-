<template>
  <v-app>
  <!-- <the-header></the-header> -->

  <router-view></router-view>
  </v-app>
</template>

<script>
// import TheHeader from "./components/TheHeader";
export default {
  name: "App",
  components: {
    // TheHeader,
  },
};
</script>

<style>
.v-window {
  height: 100vh !important;
}
</style>
