<template>
  <Container id="app" direction="vertical">
    <Header :height="'auto'">
      <!-- <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav> -->
      <NavMenu />
    </Header>
    <!-- <Main> -->
    <router-view />
    <!-- </Main> -->
  </Container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Container, Header, Main } from "element-ui";
const NavMenu = () =>
  import(
    /* webpackChunkName: 'NavMenu' */ /* webpackPrefetch: true */ "./components/NavMenu.vue"
  );

@Component({
  components: {
    Container,
    Header,
    Main,
    NavMenu,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
