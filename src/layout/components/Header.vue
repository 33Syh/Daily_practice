<template>
  <div class="lay_header">
    Header
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Header extends Vue {
  public created() {
    // create
  }
  public mounted() {
    // mounted
  }
}
</script>
<style scoped lang="stylus">
.lay_header
  background #cccccc
  height 60px
</style>
