<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-select
            v-model="queryKey"
            :items="queryKeys"
            item-text="label"
            item-value="value"
          ></v-select>
        </v-col>
        <v-col cols="7">
          <v-text-field v-model="query" label="Search" clearable></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn class="mt-3" @click="onSearch" color="primary"
            ><v-icon left> mdi-magnify</v-icon> Search</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
const QUERY_KEYS = [
  {
    label: "License Plate Number",
    value: "licensePlateNumber"
  },
  {
    label: "Owner",
    value: "ownerName"
  }
];

export default {
  name: "SearchComponent",
  props: {
    store: {
      type: String,
      required: true
    }
  },
  data: () => ({
    query: "",
    queryKey: QUERY_KEYS[0].value
  }),
  computed: {
    queryKeys() {
      return QUERY_KEYS;
    }
  },
  methods: {
    onSearch() {
      if (!this.query.length) return;
      this.$store.dispatch(`${this.store}/searchPermits`, `${this.queryKey}=${this.query}`);
    }
  },
  watch: {
    query(to, from) {
      if (from && to === null) {
        this.$store.dispatch(`${this.store}/getAllPermits`);
      }
    }
  }
};
</script>
