<template>
  <div>
    <!-- 每天早上:鸡蛋, 中午: 晚上:

    <hr /> -->
    <!-- <el-card style="width:600px" class="box-card">
      <div slot="header" class="clearfix">
        <span>早餐随机选择</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="select(1)"
          >选早餐</el-button
        >
      </div>
      <div>
        鸡蛋
      </div>
      <div>
        结果:
        <h2>{{ bre }}</h2>
      </div>
    </el-card> -->
    <p></p>
    <el-card style="width:600px" class="box-card">
      <div slot="header" class="clearfix">
        <span>随机选择</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="select(2)"
          >选</el-button
        >
      </div>

      <el-tag
        style="margin:10px 20px;width:100px;"
        v-for="(tag, index) in eatList"
        :key="index"
        :type="tag.type"
        effect="dark"
      >
        {{ tag.name }}
      </el-tag>
      <div>
        <h2>{{ lanch }}</h2>
      </div>
    </el-card>
    <p></p>
    <!-- <el-card style="width:600px" class="box-card">
      <div slot="header" class="clearfix">
        <span>肉类随机选择</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="select(3)"
          >选午餐</el-button
        >
      </div>
      <el-tag
        style="margin:10px 20px;width:100px;"
        v-for="(tag, index) in meatList"
        :key="index"
        :type="tag.type"
        effect="dark"
      >
        {{ tag.name }}
      </el-tag>
      <div>
        <h2>{{ meat }}</h2>
      </div>
    </el-card> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      bre: "",
      breList: [
        {
          name: "鸡蛋",
          type: "success"
        }
        // {
        //   name: "芹菜炒肉",
        //   type: "success"
        // },
      ],
      meat: "",
      meatList: [
        {
          name: "鸡胸肉",
          type: "success"
        },
        {
          name: "鸡胸肉丸",
          type: "warning"
        }
      ],
      lanch: "",
      eatList: [
        {
          name: "芹菜炒肉",
          type: "success"
        },
        {
          name: "芹菜木耳",
          type: "info"
        },
        {
          name: "香菇青菜",
          type: ""
        },
        {
          name: "炒杏鲍菇",
          type: "warning"
        },
        {
          name: "黄瓜鸡蛋",
          type: "danger"
        },

        {
          name: "西红柿鸡蛋",
          type: "success"
        },
        {
          name: "西红柿白菜",
          type: "info"
        },
        {
          name: "茄子圆白菜",
          type: ""
        },
        {
          name: "茄子豆角",
          type: "warning"
        },
        {
          name: "洋葱肥牛",
          type: "danger"
        },

        {
          name: "洋葱鸡蛋",
          type: "success"
        },
        {
          name: "清炒冬瓜",
          type: "info"
        },
        {
          name: "西葫芦火腿木耳",
          type: ""
        },
        {
          name: "土豆丝",
          type: "warning"
        },
        {
          name: "蒜苔炒鸡蛋",
          type: "danger"
        },
        {
          name: "蒜苔炒肉丝",
          type: "warning"
        },
        {
          name: "白玉菇木耳芹菜",
          type: "danger"
        }
      ]
    };
  },
  methods: {
    select(num) {
      // console.log(num);
      if (num === 1) {
        // const temp = parseInt(Math.random() * 3 + 1);
        this.bre = this.breList[0];
      }
      if (num === 2) {
        const temp = parseInt(Math.random() * 17);
        this.lanch = this.eatList[temp].name;
      }
      if (num === 3) {
        const temp = parseInt(Math.random() * 1 + 2);
        console.log(temp);
        this.meat = this.meatList[temp - 1].name;
      }
    }
  }
};
</script>

<style scoped lang="stylus"></style>
