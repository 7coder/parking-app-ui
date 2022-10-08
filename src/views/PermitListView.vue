<template>
  <div>
    <search-component></search-component>
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

export default {
  name: "PermitListView",

  components: { SearchComponent },
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
    ],
    permits: [
      {
        licensePlateNumber: "M M 1",
        plateIssuerCountry: "DE",
        startDate: "2022-12-12",
        endDate: "2022-12-13",
        ownerName: "Max Mustermann"
      },
      {
        licensePlateNumber: "AA-123-AA",
        plateIssuerCountry: "FR",
        startDate: "2022-12-12",
        endDate: "2022-12-13",
        ownerName: "Jean Dupont"
      },
      {
        licensePlateNumber: "SD 12345",
        plateIssuerCountry: "CH",
        startDate: "2022-12-12",
        endDate: "2022-12-13",
        ownerName: "Erika Mustermann"
      },
      {
        licensePlateNumber: "AT 123",
        plateIssuerCountry: "AT",
        startDate: "2022-12-12",
        endDate: "2022-12-13",
        ownerName: "Krethi Musterfrau"
      }
    ]
  })
};
</script>
