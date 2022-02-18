<template>
  <div>
        <Header></Header>
        <AppMain></AppMain>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import {Header,Drawer,AppMain} from './components'
@Component({
  name: 'Layout',
  components: {
    Header,
    Drawer,
    AppMain
  },
})
export default class extends Vue {
  public created() {
    // create
  }
  public mounted() {
    // mounted
  }
}
</script>
<style scoped lang="stylus"></style>
