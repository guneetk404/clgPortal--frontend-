import api from "./api";

export default {
  async getAllEnquiries() {
    return api.get("/enquiry/all");
  },
  async postComment(id, data) {
    return api.post(`/enquiry/${id}/comment`, { comment: data });
  },
  async postEnquiry(data) {
    return api.post("/enquiry/add", data);
  },
  async getEnquiries() {
    return api.get("/enquiry/");
  },
  async updateEnquiryStatus(id,data){
          return api.put(`/enquiry/${id}/update-status`,data)
  }
};

// const getAllEnquiries = async () =>{
//           return api.get("/enquiry/all");
// }

// export {get}
