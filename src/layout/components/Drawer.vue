<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      unique-opened
      :router="true"
    >
      <el-menu-item index="/es6">
        <span slot="title">
          <i class="el-icon-edit"></i>
          es6</span
        >
      </el-menu-item>
      <el-menu-item index="/g6">
        <span slot="title">
          <i class="el-icon-edit"></i>
          eat</span
        >
      </el-menu-item>
      <el-menu-item index="/g6">
        <span slot="title">
          <i class="el-icon-edit"></i>
          G6</span
        >
      </el-menu-item>

      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>123</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组大三大四一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
      <el-menu-item index="/baidu">
        <span slot="title">
          <i class="el-icon-edit"></i>
          百度地图</span
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Drawer extends Vue {
  public created() {
    // create
  }
  public mounted() {
    // mounted
  }
}
</script>
<style scoped lang="stylus"></style>
