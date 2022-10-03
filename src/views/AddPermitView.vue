<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <h2 class="text-center mb-2 mt-2">Add new permit 📄</h2>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-autocomplete
                  :items="plateIssuerCountry"
                  item-text="label"
                  item-value="code"
                  label="Country"
                ></v-autocomplete>
              </v-col>

              <v-col cols="6">
                <v-text-field v-model="licencePlate" label="License plate" required></v-text-field>
              </v-col>

              <v-col cols="6"> DataPicker component </v-col>

              <v-col cols="6"> DataPicker component </v-col>

              <v-col cols="12">
                <v-text-field v-model="ownerName" label="Owner name"></v-text-field>
              </v-col>

              <v-col class="text-center">
                <v-btn class="mr-5">Clear Form</v-btn>
                <v-btn color="success">Add Permit</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const COUNTRIES = [
  {
    code: "DE",
    label: "Germany"
  },
  {
    code: "F",
    label: "France"
  },
  {
    code: "CH",
    label: "Switzerland"
  },
  {
    code: "AT",
    label: "Austria"
  }
];

export default {
  name: "AddPermitView",
  data: () => ({}),
  computed: {
    plateIssuerCountry() {
      return COUNTRIES;
    }
  }
};
</script>
