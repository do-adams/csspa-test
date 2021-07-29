<template>
  <div id="app">
    <v-app>
      <Nav />
    </v-app>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
