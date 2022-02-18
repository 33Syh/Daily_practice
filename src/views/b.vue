<template>
  <div class="navbar">
    <div class="right-menu">
      12345623456
      <screenfull id="screenfull" class="right-menu-item hover-effect" />
    </div>
  </div>
</template>

<script>
import Screenfull from "@/layout/Screenfull";

export default {
  components: {
    Screenfull
  },
  computed: {},
  methods: {}
};
</script>

<style lang="stylus" scoped>
.navbar {
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
}
</style>
