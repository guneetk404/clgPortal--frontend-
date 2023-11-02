<template>
  <div class="adminAnnouncementContainer">
    <v-data-table
      :headers="headers"
      :items="announcements"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Announcements</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ props }">
              <v-btn color="primary" dark class="mb-2" v-bind="props">
                Create New Announcement
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.title"
                        label="Announcement title"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.description"
                        label="Description"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.category"
                        label="Category"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.attachment_url"
                        label="Attachement"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        disabled
                        v-model="editedItem.date"
                        label="Date"
                        variant="outlined"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="close">
                  Cancel
                </v-btn>
                <v-btn color="blue-darken-1" variant="text" @click="save">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to delete this item?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="deleteItemConfirm"
                  >OK</v-btn
                >
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon size="small" class="me-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon size="small" @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="getAnnouncements"> Reset </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { VDataTable } from "vuetify/labs/VDataTable";
import { getAnnouncements } from "../../services/announcementApi.js";
import { postAnnouncement } from "../../services/announcementApi.js";
import {deleteAnnouncement} from "../../services/announcementApi.js";
import {updateAnnouncement} from "../../services/announcementApi.js"

export default {
  components: {
    VDataTable,
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        title: "Title",
        align: "start",
        sortable: false,
        key: "title",
      },
      { title: "Description", key: "description" },
      { title: "Category", key: "category" },
      { title: "Attachment Document", key: "attachment_url" },
      { title: "Date ", key: "date" },

      { title: "Actions", key: "actions", sortable: false },
    ],
    announcements: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      description: "",
      category: "",
      attachment_url: "",
      date: new Date(),
    },
    defaultItem: {
      title: "",
      description: "",
      category: "",
      attachment_url: "",
      date: new Date(),
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Announcement";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.getAnnouncements();
  },

  methods: {
    async getAnnouncements() {
      // this.announcements = [
      //   {
      //     title: "Announcement 1 ",
      //     description: "this is about announcement 1",
      //     category: "Academics",
      //     attachment_url: "url",
      //     date: "2023-10-21",
      //   },
      // ];

      const res = await getAnnouncements();
      this.announcements = res.data.data;
      console.log(this.announcements);
    },

    editItem(item) {
      this.editedIndex = this.announcements.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.announcements.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

   async  deleteItemConfirm() {
      // console.log(this.editedItem._id);
      const id = this.editedItem._id;
      const res = await deleteAnnouncement(id)
      console.log(res);
      this.announcements.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

   async save() {
     if (this.editedIndex > -1) {
        console.log(this.editedItem);
        const id = this.editedItem._id;
        const data = this.editedItem
        const res = await updateAnnouncement(id,data);
        console.log(res);
        Object.assign(this.announcements[this.editedIndex], this.editedItem);
      } else {
        // this.editedItem.date = new Date();
        this.announcements.push(this.editedItem);
        const res = await postAnnouncement(this.editedItem);
        console.log(res);
      }
      this.close();
    },
  },
};
</script>

<style>

.adminAnnouncementContainer{
  margin-top:75px;
}
</style>