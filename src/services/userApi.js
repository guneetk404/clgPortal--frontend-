import api from "./api";

export default {
  async getUserData() {
    return api.get("/user/");
  },
  async updateUserData(data) {
    return api.put("/user/update-user", data);
  },

  async createUser(data) {
    return api.post("/user/add-user", data);
  },
};
