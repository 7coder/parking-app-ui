<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        :value="dateFormatted"
        label="Date"
        hint="MM/DD/YYYY format"
        persistent-hint
        prepend-icon="mdi-calendar"
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker :value="date" no-title @input="setDateFromPicker($event)"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: "DatePicker",
  props: {
    name: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    getter: {
      type: String,
      requred: true
    }
  },
  data: () => ({
    menu: false
  }),

  computed: {
    dateFormatted() {
      return this.formatDate(this.date);
    },
    date() {
      return this.$store.getters[`${this.state}/${this.getter}`];
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    setDateFromPicker(date) {
      this.menu = false;
      this.setField({
        name: this.name,
        value: date
      });
    },
    setField(fieldObject) {
      this.$store.dispatch(`${this.state}/setField`, fieldObject);
    },
    setDate(e) {
      this.setDateFromPicker(this.parseDate(e.target.value));
    }
  }
};
</script>
