<template>
  <!-- 评论列表 -->
  <mu-list>
    <div v-for="(item, index) in comments" :key="index">
      <mu-list-item :id="item.id" :title="item.user.nickName" :describeText="item.date" disabled>
        <mu-avatar :src="item.user.avatar" slot="leftAvatar"/>
        <br />
        <span v-if="item.pid" v-html="getParent(item.pid)" />
        <span class="my-dynamic-comment-text">{{item.content}}</span>
        <mu-card-actions class="my-button comment-list">
          <mu-flat-button v-show="showDel" label="删除" />        
          <mu-flat-button label="回复" @click="open(item)" secondary />
        </mu-card-actions>
      </mu-list-item>      
      <app-comment-field v-if="currentItem === item.id" :contentHintText="contentHintText" />                           
      <mu-divider v-if="index < comments.length - 1" inset />
    </div>
  </mu-list>
</template>

<script>
import { getSessionItem } from "../util/common";

export default {
  data() {
    return {
      showDel: getSessionItem(),
      currentItem: -1,
      contentHintText: "输入评论..."
    };
  },

  props: {
    comments: Array
  },

  methods: {
    getParent(pid) {
      for (let i of this.comments) {
        if (i.id === pid) {
          return `<a href='#${i.id}'>回复 ${i.user.nickName}：</a>`;
        }
      }
    },
    open(item) {
      this.currentItem = this.currentItem === item.id ? -1 : item.id;
      this.contentHintText = `回复 ${item.user.nickName}：`;
    }
  }
};
</script>

