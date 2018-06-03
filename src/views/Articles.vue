<template>
  <div>
    <app-article-card v-for="(item, index) in articleList" 
      :key="index"
      :article="item"
      @click.native="go(item)" />
    <mu-back-top />
    <mu-infinite-scroll :scroller="scroller" :loading="loading" :loadingText="loadingText" @load="LoadMore" />            
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
      scroller: null,
      loadingText: "正在加载..."
    };
  },

  computed: {
    ...mapState(["articleList", "articleListPage"])
  },

  mounted() {
    this.scroller = window;
    this.articleList.length || this.getArticleList(1);
  },

  methods: {
    ...mapActions(["getArticleList", "saveTemp", "upArticleListPage"]),
    go(item) {
      this.saveTemp(item);
      this.$router.push({ name: "Article", params: { id: item.id } });
    },
    LoadMore() {
      this.loading = true;
      this.upArticleListPage();
      this.getArticleList(this.articleListPage).then(() => {
        this.loading = false;
      });
    }
  }
};
</script>
