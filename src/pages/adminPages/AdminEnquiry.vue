<template>
  <div class="adminAnnouncementContainer">
    <v-data-table
      :headers="headers"
      :items="enquiries"
      :sort-by="[{ key: 'calories', order: 'asc' }]"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Enquiries</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <!-- <template v-slot:activator="{ props }">
              <v-btn color="primary" dark class="mb-2" v-bind="props">
                New Item
              </v-btn>
            </template> -->
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                        v-model="enquiryComment"
                        label="Enquiry Comment"
                        variant="outlined"
                      ></v-textarea>
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
          <v-dialog v-model="dialogDelete" max-width="650px">
            <v-card>
              <v-card-title class="text-h5"
                >Are you sure you want to mark the status as
                resolved?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue-darken-1" variant="text" @click="closeDelete"
                  >Cancel</v-btn
                >
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="markItemConfirm"
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
        <v-icon size="small" @click="markStatus(item)">
          mdi-checkbox-marked-circle
        </v-icon>
      </template>
      <!-- <template v-slot:no-data>
        <v-btn color="primary" @click="getAllEnquiries"> Reset </v-btn>
      </template> -->
    </v-data-table>
  </div>
</template>

<script>
import { VDataTable } from "vuetify/labs/VDataTable";
import enquiryApi from "../../services/enquiryApi.js";
export default {
  components: {
    VDataTable,
  },
  data: () => ({
    enquiryComment: "comment",
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
      { title: "Status", key: "status" },
      { title: "Date ", key: "date" },
      { title: "Actions", key: "actions", sortable: false },
    ],
    enquiries: [],
    editedIndex: -1,
    editedItem: {
      title: "",
      description: "",
      status: "",
      date: "",
    },
    defaultItem: {
      title: "",
      description: "",
      status: "",
      date: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Enquiry Comment" : "Enquiry Comment";
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
    this.getAllEnquiries();
  },

  methods: {
    async getAllEnquiries() {
      // this.enquiries = [
      //   {
      //     title: "Enquiry 1 ",
      //     description: "this is about fees enquiry 1",
      //     status: "Pending",
      //     date: "2023-10-21",
      //   },
      // ];
      const res = await enquiryApi.getAllEnquiries();
      this.enquiries = res.data.data;
    },

    editItem(item) {
      this.editedIndex = this.enquiries.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    markStatus(item) {
      // console.log(item);
      this.editedIndex = this.enquiries.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async markItemConfirm() {
      console.log(this.editedItem);
      const id =this.editedItem._id;
      // const status = "success";
      const res = await enquiryApi.updateEnquiryStatus(id,{status:"success"});
      Object.assign(this.enquiries[this.editedIndex], this.editedItem);

      console.log(res.data);
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
        const data = this.enquiryComment;
        const res = await enquiryApi.postComment(id, data);
        console.log(res.data);
        Object.assign(this.enquiries[this.editedIndex], this.editedItem);
      } else {
        this.enquiries.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
