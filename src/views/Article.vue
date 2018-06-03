<template>
  <div>
    <app-article-card :article="article" :isShort="false" />
    <mu-divider />
    <app-comment-field :contentRows="5" :contentMaxLength="500" />
    <mu-sub-header class="my-sub-header">评论</mu-sub-header>   
    <app-dynamic-card v-for="item in dynamics" 
      :key="item.id"
      :dynamic="item" />
    <mu-back-top />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getArticle } from "../axios/api";

export default {
  props: ["id"],

  data() {
    return {
      article: {},
      dynamics: [
        {
          id: 1,
          date: new Date().toLocaleString(),
          content:
            "散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。\
            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。\
            似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，\
            找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！"
        },
        {
          id: 2,
          date: new Date().toLocaleString(),
          content: "test2"
        }
      ]
    };
  },

  computed: {
    ...mapState(["temp"])
  },

  mounted() {
    if (this.temp) {
      this.article = this.temp;
    } else {
      getArticle(this.id).then(res => {
        this.article = res;
      });
    }
  }
};
</script>
