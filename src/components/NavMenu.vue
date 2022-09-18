<template>
  <div>
    <Menu
      style="display: inline-flex; float: left"
      data-qa-id="nav-menu"
      :mode="'horizontal'"
      :router="true"
      :default-active="currentRoute"
    >
      <MenuItem
        v-for="route in $router.options.routes"
        :key="route.path"
        :route="route"
        :index="route.path"
      >
        {{ route.path }}
      </MenuItem>
    </Menu>
    <Button
      style="text-color: white; float: right"
      plain
      type="primary"
      icon="el-icon-switch-button"
      @click="openLoginDialog = true"
      >Login</Button
    >
    <div v-if="openLoginDialog">
      <Login
        :open="openLoginDialog"
        @close="(val) => (openLoginDialog = val)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";
import { Menu, MenuItem, Button } from "element-ui";
import Login from "@/views/Login.vue";

@Component({
  components: {
    Menu,
    MenuItem,
    Button,
    Login,
  },
})
export default class NavMenu extends Vue {
  currentRoute = "/";
  openLoginDialog = false;

  @Watch("$route.path")
  onRoutePathChange(newValue: string) {
    // triggered only once at startup since router is not reactive.
    this.currentRoute = newValue;
  }
}
</script>

<style lang="scss" scoped></style>
