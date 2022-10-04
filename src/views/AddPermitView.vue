<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <h2 class="text-center mb-2 mt-2">Add new permit 📄</h2>
        <v-form @submit.prevent="onSubmit">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-autocomplete
                  :items="plateIssuerCountries"
                  item-text="label"
                  item-value="code"
                  label="Country"
                  :value="plateIssuerCountry"
                  @change="setAutoCompliteField"
                ></v-autocomplete>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  :value="licensePlateNumber"
                  name="licensePlateNumber"
                  label="License plate"
                  clearable
                  validate-on-blur
                  @input.native="setInputField($event)"
                ></v-text-field>
              </v-col>

              <v-col cols="6">
                <DatePicker
                  name="startDate"
                  state="permitCreation"
                  getter="getStartDate"
                ></DatePicker>
              </v-col>

              <v-col cols="6">
                <DatePicker name="endDate" state="permitCreation" getter="getEndDate"></DatePicker>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  :value="ownerName"
                  name="ownerName"
                  label="Owner name"
                  clearable
                  validate-on-blur
                  @input.native="setInputField($event)"
                ></v-text-field>
              </v-col>

              <v-col class="text-center">
                <v-btn class="mr-5" @click="onClearForm">Clear Form</v-btn>
                <v-btn color="success" type="submit">Add Permit</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

import DatePicker from "@/components/DatePicker.vue";

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
  components: { DatePicker },
  computed: {
    plateIssuerCountries() {
      return COUNTRIES;
    },
    ...mapGetters({
      plateIssuerCountry: "permitCreation/getPlateIssuerCountry",
      licensePlateNumber: "permitCreation/getLicensePlateNumber",
      ownerName: "permitCreation/getOwnerName"
    })
  },
  methods: {
    setAutoCompliteField(value) {
      this.setField({
        name: "plateIssuerCountry",
        value
      });
    },
    setInputField(e) {
      let { name, value } = e.target;
      this.setField({
        name,
        value
      });
    },
    setField(fieldObject) {
      this.$store.dispatch("permitCreation/setField", fieldObject);
    },
    onSubmit() {
      //...
    },
    onClearForm() {
      this.$store.dispatch("permitCreation/clearForm");
    }
  }
};
</script>
