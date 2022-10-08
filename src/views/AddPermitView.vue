<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="6">
        <h2 class="text-center mb-2 mt-2">Add new permit 📄</h2>
        <v-form @submit.prevent="onSubmit" ref="form" v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-autocomplete
                  :items="plateIssuerCountries"
                  item-text="label"
                  item-value="code"
                  label="Country"
                  :rules="plateIssuerCountryRules"
                  :value="plateIssuerCountry"
                  @change="setAutoCompliteField"
                  class="required-field"
                ></v-autocomplete>
              </v-col>

              <v-col cols="6">
                <v-text-field
                  ref="licensePlateNumberRef"
                  :value="licensePlateNumber"
                  name="licensePlateNumber"
                  label="License plate"
                  clearable
                  :rules="plateRules"
                  @input.native="setInputField($event)"
                  class="required-field"
                  :hint="licencePlateHint"
                  persistent-hint
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
                <v-btn color="success" type="submit" :disabled="!valid">Add Permit</v-btn>
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

import { isPlateValid } from "@/helpers/plateValidator";

import DatePicker from "@/components/DatePicker.vue";

const COUNTRIES = [
  {
    code: "DE",
    label: "Germany"
  },
  {
    code: "FR",
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

const plateFormats = {
  DE: "X X 1234",
  FR: "XX-123-XX",
  CH: "XX 123456",
  AT: "AB 123CDE"
};

export default {
  name: "AddPermitView",
  data: () => ({
    valid: false
  }),
  components: { DatePicker },
  computed: {
    plateIssuerCountries() {
      return COUNTRIES;
    },
    plateIssuerCountryRules() {
      return [(v) => !!(v && v.length) || "Please specify the country"];
    },
    plateRules() {
      let that = this;

      if (!that.plateIssuerCountry) return ["Please fill the Country field"];

      return [
        (v) =>
          (v && isPlateValid(that.plateIssuerCountry, v)) ||
          `Incorrect format data for ${that.plateIssuerCountry} region`
      ];
    },
    licencePlateHint() {
      if (!this.plateIssuerCountry) return "Please specify the Country";

      return `Please enter the plate with the format ${plateFormats[this.plateIssuerCountry]}`;
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
  },
  watch: {
    plateIssuerCountry(to, from) {
      if (from && from !== to) {
        this.$refs.form.validate();
      }
    }
  }
};
</script>

<style>
.required-field.v-input .v-label::after {
  content: " *";
  color: rgb(177, 30, 30);
}
</style>
