<template>
  <div>
    <mu-paper class="my-paper" :zDepth="1">
      <mu-card-title title="关于我" />             
      <mu-card-text v-html="content" class="my-card-text my-profile" /> 
    </mu-paper>
    <mu-back-top />
  </div>
</template>

<script>
import Marked from "../util/mdConfig";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["userInfo"]),
    content() {
      return Marked(`${this.userInfo.profile}`);
    }
  }
};
</script>

<style scoped>
.my-profile {
  margin-top: -32px;
}
</style>