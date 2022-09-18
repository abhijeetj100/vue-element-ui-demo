<template>
  <div class="home">Homepage</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "element-ui";

// Components
const Login = () =>
  import(
    /* webpackChunkName: "Login" */ /* webpackPrefetch: true */ "./Login.vue"
  );

@Component({
  components: {
    Login,
    Button,
  },
})
export default class Home extends Vue {
  openLoginDialog = false;

  openDialog() {
    this.openLoginDialog = true;
  }
}
</script>
