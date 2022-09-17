<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Button @click="openDialog" type="primary" icon="el-icon-switch-button"
      >Login</Button
    >
    <Login :open="openLoginDialog" @close="(val) => (openLoginDialog = val)" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Login from "./Login.vue";
import { Button } from "element-ui";

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
