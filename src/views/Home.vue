<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Button @click="openDialog" type="primary" icon="el-icon-switch-button"
      >Login</Button
    >
    <Login
      v-if="openLoginDialog"
      :open="openLoginDialog"
      @close="(val) => (openLoginDialog = val)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Button } from "element-ui";

// Components
const HelloWorld = () =>
  import(
    /* webpackChunkName: "HelloWorld" */ /* webpackPrefetch: true */ "../components/HelloWorld.vue"
  );
const Login = () =>
  import(
    /* webpackChunkName: "Login" */ /* webpackPrefetch: true */ "./Login.vue"
  );

@Component({
  components: {
    HelloWorld,
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
