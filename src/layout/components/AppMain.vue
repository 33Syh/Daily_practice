<template>
  <div class="app_main">
    <div class="draw">
      <Drawer />
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Drawer from './Drawer.vue'
@Component({
  name: 'AppMain',
  components: {
    Drawer,
  },
})
export default class AppMain extends Vue {
  public created() {
    // create
  }
  public mounted() {
    // mounted
  }
}
</script>
<style scoped lang="stylus">
.app_main
  height 100%
  // height calc(100%)
  .draw
    height 100%
    float left
    width: 200px;
    // background green
  .main
    // background red
    float right
    width calc(100% - 200px);
</style>
