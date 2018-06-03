<template>
    <mu-paper class="my-paper" :zDepth="1">
      <!-- 文章封面 -->
      <mu-card-media v-if="article.cover">
        <img :src="article.cover" />
      </mu-card-media>
      <!-- 文章标题 -->
      <router-link v-if="isShort" :to="link">
        <mu-card-title :title="article.title" :subTitle="article.date" titleClass="my-title" />        
      </router-link>
      <mu-card-title v-else :title="article.title" :subTitle="article.date" />
      <!-- 文章本体 -->
      <mu-card-text v-html="content" class="my-card-text my-article" :class="{'short-des': isShort}" /> 
      <!-- 编辑和删除按钮 -->
      <!-- <div class="my-button">
        <mu-card-actions >
          <mu-flat-button label="编辑" @click.stop="edit" secondary />
          <mu-flat-button label="删除" @click.stop="del" secondary />
        </mu-card-actions>
      </div>  -->
    </mu-paper>  
</template>

<script>
import Marked from '../util/mdConfig'

export default {
  props: {
    article: Object,
    isShort: {
      type: Boolean,
      default: true
    }
  },

  computed: {
    content() {
      if (this.isShort && this.article.content.length > 100) {
        return Marked(`${this.article.content.slice(0, 100)}...`);
      }
      return Marked(`${this.article.content}`);
    },
    link() {
      return this.isShort ? `/articles/${this.article.id}` : "";
    }
  },

  methods: {
    edit() {},
    del() {}
  }
};
</script>

<style scoped>
.my-article {
  margin-top: -32px;
}
</style>
