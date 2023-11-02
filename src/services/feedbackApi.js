import api from "./api";

export default {
  async getFeedbackParams() {
    return api.get("/feedback/get-parameter");
  },

  async postFeedback(data) {
    return api.post("/feedback/add", data);
  },
};
