import api from "./api";

export default {
  async getDocuments() {
    return api.get("/document/");
  },
};
