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
