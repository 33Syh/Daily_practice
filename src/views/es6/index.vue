<template>
  <div>
    <h1>es6</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class extends Vue {
  public created() {
    // create
    this.init();
  }
  private init() {
    // eslint-disable-next-line no-var
    for (var i = 0; i < 10; i++) {
      console.log(i);
      setTimeout(() => {
        console.log(i);
      });
    }
  }
  public mounted() {
    // mounted
  }
}
</script>
<style scoped lang="stylus"></style>
