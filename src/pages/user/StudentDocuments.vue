<template>
  <div class="documentContainer">
    <h2 class="a-heading">Documents</h2>
    <hr />
    <v-card class="shadow-card" style="margin: 25px">
      <div class="announcement" v-for="doc in documents" :key="doc.id">
        <v-card-text>
          <div class="document-content">
            <h3>
              <span class="mr-4">{{ doc.title }}</span>
              <span class="announcement-date"> ({{ doc.date }}) </span>
              <span class="float-right mr-4">
                <!-- Document Id : {{ doc.documentId }} -->
              </span>
            </h3>
            <!-- <div class="content mt-4">
              {{ doc.description }}
            </div> -->
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-icon small>mdi-download</v-icon>
              <a :href="doc.attachment_url" target="_blank">Download</a>
            </v-card-actions>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import documentApi from "../../services/documentApi";
export default {
  data() {
    return {
      documents: [
        {
          title: "First Semester Result",
          date: "16 Oct 2023",
          attachment_url: "hi",
        },
        // Add more document objects as needed
      ],
    };
  },
  created() {
    this.getDocuments();
  },
  methods: {
    async getDocuments() {
      const res = await documentApi.getDocuments();
      this.documents = res.data.data;
      console.log(res.data);
    },
  },
};
</script>

<style scoped>
.documentContainer {
  margin-top: 80px;
}
.a-heading {
  margin: 10px;
}

.document-content {
  background-color: rgb(242, 242, 240);
  box-shadow: 8px 8px 10px 0 rgba(0, 0, 0, 0.5);
  font-size: 15px;
}
</style>
