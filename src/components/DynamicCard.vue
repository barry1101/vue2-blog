<template>
  <!-- 动态卡片 -->
  <mu-paper class="my-paper" :zDepth="1">
    <mu-card-header :title="userInfo.nickName" :subTitle="dynamic.date">
      <mu-avatar :src="userInfo.avatar" slot="avatar"/>
    </mu-card-header>
    <mu-card-text v-html="dynamic.content" class="my-card-text" />  
    <mu-card-actions class="my-button">
      <mu-flat-button v-show="showDel" label="删除" />        
      <mu-flat-button label="回复" @click="toggleInputField" secondary />
      <mu-flat-button :label="textChange" @click="toggleComment" />
    </mu-card-actions>
    <mu-divider v-show="(showComments && dynamic.comments) || showInputField" />         
    <app-comment-field v-show="showInputField" />  
    <app-comment-list v-show="showComments" :comments="dynamic.comments" />
  </mu-paper>
</template>

<script>
import { mapState } from "vuex";
import { getSessionItem } from "../util/common";

export default {
  props: ["dynamic"],

  data() {
    return {
      showDel: getSessionItem(),
      showInputField: false,
      showComments: this.defaultShowCommnet()
    };
  },

  computed: {
    ...mapState(["userInfo"]),
    textChange() {
      return this.showComments ? "收起评论 ▲" : "显示评论 ▼";
    }
  },

  methods: {
    toggleComment() {
      this.showComments = !this.showComments;
    },
    toggleInputField() {
      this.showInputField = !this.showInputField;
    },
    defaultShowCommnet() {
      return this.dynamic.comments ? true : false;
    }
  }
};
</script>
