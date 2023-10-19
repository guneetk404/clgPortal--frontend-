<template>
  <div class="homecontainer" style="margin-top:'10rem';">
    <v-carousel class="carousel">
      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
        cover
      ></v-carousel-item>

      <v-carousel-item
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        cover
      ></v-carousel-item>
    </v-carousel>
    <div class="login">
      <v-container class="login1">
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-img
              src="https://thumbs.dreamstime.com/b/print-173909015.jpg"
              max-height="150"
            ></v-img>
          </v-col>
        </v-row>
        <h2 class="center">Sign in</h2>

        <form @submit.prevent="login" class="login-form">
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required />
          </div>
          <div class="btnlogin">
            <button type="submit" class="login-button">Login</button>
          </div>
        </form>
        <!-- <h3>Sign in using Google Account</h3>
        <GoogleLogin :callback="handleGoogleLogin" class="google-login" /> -->
        <div class="notreg">
          <span>Not Registered?</span>
          <router-link to="/signup">Sign Up here</router-link>
          <div>
            <router-link to="/reset-password">Forget Password</router-link>
          </div>
        </div>
        <div class="footer">Copyright © Argusoft India LTD</div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.center {
  text-align: center;
}
.footer {
  margin-top: 50px;
  text-align: center;
  color: grey;
}
.notreg {
  text-align: right;
}
.carousel {
  width: 60%;
}
.login1 {
  margin-top: 15px;
}
.login {
  margin-left: 15px;
  width: 40%;
  height: 100vh;
}
.in {
  display: flex;
  flex-direction: column;
}
.homecontainer {
  display: flex;
  justify-center: space-between;
  align-items: center;
}

.login-container {
  margin-top: 50px;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  font-size: 24px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}
.login-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  width: 100%;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
.btnlogin {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button.login-button:hover {
  background-color: #0056b3;
}

h3 {
  font-size: 18px;
}

.google-login {
  margin-top: 20px;
}
a {
  color: black;
  text-decoration: none;
}
</style>
