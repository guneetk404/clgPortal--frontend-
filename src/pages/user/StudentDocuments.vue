<template>
  <div class="documentContainer">
    <h2 class="a-heading">Documents</h2>
    <hr />
    <v-card class="shadow-card" style=" margin: 25px">
      <div class="announcement" v-for="doc in documents" :key="doc.id">
        <v-card-text>
          <div class="document-content">
            <h3>
              <span class="mr-4">{{ doc.title }}</span>
              <span class="announcement-date"> ({{ doc.date }}) </span>
              <span class="float-right mr-4 ">
                Document Id : {{ doc.documentId }}
              </span>
            </h3>
            <div class="content mt-4">
              {{ doc.description }}
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-icon small>mdi-download</v-icon>
            </v-card-actions>
          </div>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [
        {
          documentId: 17854,
          title: "First Semester Result",
          date: "16 Oct 2023",
          description:
            "This is the notification for the students to view the results of final Exams of session January-July batch (2024)",
        },
        {
          documentId: 17857,
          title: "Second Semester Result",
          date: "26 Oct 2023",
          description:
            "This is the notification for the students to view the results of final Exams of session July-december batch (2024)",
        },
        {
          documentId: 17974,
          title: "Third Semester Result",
          date: "26 Oct 2023",
          description:
            "This is the notification for the students to view the results of final Exams of session January-July batch (2024)",
        },
        {
          documentId: 17857,
          title: "Fourth Semester Result",
          date: "26 Oct 2023",
          description:
            "This is the notification for the students to view the results of final Exams of session July-december batch (2024)",
        },
        {
          documentId: 17974,
          title: "Fifth Semester Result",
          date: "26 Oct 2023",
          description:
            "This is the notification for the students to view the results of final Exams of session January-July batch (2024)",
        },
        // Add more document objects as needed
      ],
    };
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
