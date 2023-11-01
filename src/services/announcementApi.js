import api from "./api";

const getAnnouncements = async () => {
  return api.get("/announcement/");
};
const postAnnouncement = async (data) => {
  return api.post("/announcement/add", data);
};

const deleteAnnouncement = async (id) => {
  return api.delete(`/announcement/delete/${id}`);
};

const updateAnnouncement = async (id, data) => {
  return api.put(`/announcement/update/${id}`, data);
};

export {
  getAnnouncements,
  postAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
};
