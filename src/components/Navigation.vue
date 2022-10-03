<template>
  <v-toolbar color="grey lighten-4" flat class="rounded">
    <v-toolbar-title class="grey--text text--darken-4">🚗 Parking App</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text class="mr-2" to="/" exact>Permits</v-btn>
    <v-btn text to="/addPermit" exact>Add permit</v-btn>
  </v-toolbar>
</template>

<script>
export default {
  name: "NavigationComponent"
};
</script>
