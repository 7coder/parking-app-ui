<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="query" label="Search" required></v-text-field>
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
export default {
  name: "SearchComponent",
  props: {
    store: {
      type: String,
      required: true
    }
  },
  data: () => ({
    query: ""
  }),
  methods: {
    onSearch() {
      if (!this.query.length) return;
    }
  }
};
</script>
