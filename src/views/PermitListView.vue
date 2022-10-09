<template>
  <div>
    <search-component store="permits"></search-component>
    <v-data-table
      :headers="headers"
      :items="permits"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import SearchComponent from "@/components/Search.vue";
import { mapGetters } from "vuex";

export default {
  name: "PermitListView",

  components: { SearchComponent },
  mounted() {
    this.$store.dispatch("permits/getAllPermits");
  },
  data: () => ({
    headers: [
      {
        text: "License Plate Number",
        align: "start",
        sortable: false,
        value: "licensePlateNumber"
      },
      { text: "Country", value: "plateIssuerCountry" },
      { text: "Start Date", value: "startDate" },
      { text: "End Date", value: "endDate" },
      { text: "Owner", value: "ownerName" }
    ]
  }),
  computed: {
    ...mapGetters({
      permits: "permits/getPermits"
    })
  }
};
</script>
